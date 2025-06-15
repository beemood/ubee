import { readdir as __readdir, stat } from 'fs/promises';
import { resolve } from 'path';

export type ReaddirOptions = {
  recursive?: boolean;
};

export type FileStat = {
  filepath: string;
  isDirectory: boolean;
  isFile: boolean;
  subs?: ReaddirResponse;
};

export type ReaddirResponse = FileStat[];

/**
 * Find all directories and files under the {@link rootdir} directory and map it with {@link ReaddirResponse} type.
 * @param rootdir isDirectory
 * @param options {@link ReaddirOptions}
 * @returns
 */
export async function readdir(
  rootdir: string,
  options?: ReaddirOptions
): Promise<ReaddirResponse> {
  const response: ReaddirResponse = [];

  const foundFilenames = await __readdir(rootdir, { encoding: 'utf-8' });

  const absoluteFilePaths = foundFilenames.map((filepath: string) => {
    return resolve(rootdir, filepath);
  });

  for (const filepath of absoluteFilePaths) {
    const s = await stat(filepath);
    const isFile = s.isFile();
    const isDirectory = s.isDirectory();

    if (options?.recursive !== true) {
      response.push({
        filepath,
        isDirectory,
        isFile,
      });
      continue;
    }

    const subs = isDirectory ? await readdir(filepath, options) : undefined;
    response.push({
      filepath,
      isDirectory,
      isFile,
      subs,
    });
  }

  return response;
}

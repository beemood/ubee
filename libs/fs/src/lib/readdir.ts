import { readdir as __readdir, stat } from 'fs/promises';
import { resolve } from 'path';

export type ReaddirOptions = {
  recursive?: boolean;
};

export type FileStat = {
  filePath: string;
  fileName: string;
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

  const absoluteFilePaths = foundFilenames.map((fileName: string) => {
    return { filePath: resolve(rootdir, fileName), fileName };
  });

  for (const { filePath, fileName } of absoluteFilePaths) {
    const s = await stat(filePath);
    const isFile = s.isFile();
    const isDirectory = s.isDirectory();

    if (options?.recursive !== true) {
      response.push({
        fileName,
        filePath,
        isDirectory,
        isFile,
      });
      continue;
    }

    const subs = isDirectory ? await readdir(filePath, options) : undefined;
    response.push({
      filePath,
      fileName,
      isDirectory,
      isFile,
      subs,
    });
  }

  return response;
}

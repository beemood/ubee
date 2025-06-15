import type { FileStat, ReaddirOptions } from './readdir.js';
import { readdir } from './readdir.js';

/**
 * Run {@link callback} function for each filepath under the provided {@link rootdir} directory
 * @param rootdir root directory
 * @param callback callback function to be run with filepath of each found file/directory
 * @param options readdir options {@link ReaddirOptions}
 */
export async function forEachDir(
  rootdir: string,
  callback: (filepath: FileStat) => void | Promise<void>,
  options?: ReaddirOptions
) {
  const founddirs = await readdir(rootdir, options);
  for (const filepath of founddirs) {
    await callback(filepath);
    if (filepath.subs) {
      for (const sfilepath of filepath.subs) {
        callback(sfilepath);
      }
    }
  }
}

import { readTextFile } from './read-text-file.js';

/**
 * Read json file
 * @param filepath file path
 * @returns T
 */
export async function readJsonFile<T extends object>(
  filepath: string
): Promise<T> {
  return JSON.parse(await readTextFile(filepath)) as T;
}

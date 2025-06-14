import { readFile } from 'fs/promises';

/**
 * Read text file
 * @param filepath file path
 * @returns string
 */
export async function readTextFile(filepath: string): Promise<string> {
  return await readFile(filepath, { encoding: 'utf-8' });
}

import type { LoadOptions } from 'js-yaml';
import { load } from 'js-yaml';
import { readTextFile } from './read-text-file.js';

/**
 * Read yaml file
 * @param filepath file path
 * @param options Check js-yaml's LoadOptions
 * @returns
 */
export async function readYamlFile<T extends object>(
  filepath: string,
  options?: LoadOptions
): Promise<T> {
  const content = await readTextFile(filepath);
  const result = await load(content, options);
  return result as T;
}

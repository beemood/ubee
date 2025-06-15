import { writeTextFile } from './write-text-file';

export async function writeJsonFile<T extends object>(
  filepath: string,
  content: T
): Promise<void> {
  return await writeTextFile(filepath, JSON.stringify(content));
}

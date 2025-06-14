import { createReadStream } from 'fs';
import { createInterface, Interface } from 'readline';

/**
 * Red file line by line
 * @param filepath
 * @returns
 */
export function readline(filepath: string): Interface {
  const stream = createReadStream(filepath);
  return createInterface({ input: stream, crlfDelay: Infinity });
}

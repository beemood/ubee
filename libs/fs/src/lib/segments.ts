import { normalize } from 'path';

export function segments(filePath: string) {
  return normalize(filePath).split('\\');
}

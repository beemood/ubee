import { segments } from './segments';

export function lastSegmenet(filePath: string) {
  return segments(filePath).pop();
}

export function popPush<T>(array: T[], item: T): void {
  array.pop();
  array.push(item);
}

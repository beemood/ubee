import { ListVersionsOptions } from './list-versions.options.js';

/**
 * Say list-versions
 * @param options {@link ListVersionsOptions}
 */
export function listVersionsAction(options: ListVersionsOptions): void {
  console.log(options.template.replaceAll('$name', options.name));
}

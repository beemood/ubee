import { ReplaceOptions } from './replace.options.js';

/**
 * Say replace
 * @param options {@link ReplaceOptions}
 */
export function replaceAction(options: ReplaceOptions): void {
  console.log(options.template.replaceAll('$name', options.name));
}

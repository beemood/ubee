import { RenameOptions } from './rename.options.js';

/**
 * Say rename
 * @param options {@link RenameOptions}
 */
export function renameAction(options: RenameOptions): void {
  console.log(options.template.replaceAll('$name', options.name));
}

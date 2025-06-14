import { Command } from 'commander';
import { renameAction } from './rename.action.js';

/**
 * Bind rename command to the main command
 * @param command commander Command type
 */
export function renameCommand(command: Command): void {
  command
    .command('rename')
    .description('Say rename')
    .option('-t, --template <string>', 'Message template', 'Rename, $name')
    .requiredOption('-n, --name <string>', 'what is your name?')
    .action(renameAction);
}

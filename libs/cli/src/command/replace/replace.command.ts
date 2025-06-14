import { Command } from 'commander';
import { replaceAction } from './replace.action.js';

/**
 * Bind replace command to the main command
 * @param command commander Command type
 */
export function replaceCommand(command: Command): void {
  command
    .command('replace')
    .description('Say replace')
    .option('-t, --template <string>', 'Message template', 'Replace, $name')
    .requiredOption('-n, --name <string>', 'what is your name?')
    .action(replaceAction);
}

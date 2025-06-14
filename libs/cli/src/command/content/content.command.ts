import { Command } from 'commander';
import { contentAction } from './content.action.js';

/**
 * Bind content command to the main command
 * @param command commander Command type
 */
export function contentCommand(command: Command): void {
  command
    .command('content')
    .description('Say content')
    .option('-t, --template <string>', 'Message template', 'Content, $name')
    .requiredOption('-n, --name <string>', 'what is your name?')
    .action(contentAction);
}

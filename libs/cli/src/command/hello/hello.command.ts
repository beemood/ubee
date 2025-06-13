import { Command } from 'commander';
import { helloAction } from './hello.action.js';

/**
 * Bind hello command to the main command
 * @param command commander Command type
 */
export function helloCommand(command: Command): void {
  command
    .command('hello')
    .description('Say hello')
    .option('-t, --template <string>', 'Message template', 'Hello, $name')
    .requiredOption('-n, --name <string>', 'what is your name?')
    .action(helloAction);
}

import { Command } from 'commander';
import { listVersionsAction } from './list-versions.action.js';

/**
 * Bind listVersions command to the main command
 * @param command commander Command type
 */
export function listVersionsCommand(command: Command): void {
  command
    .command('list-versions')
    .description('Say list-versions')
    .option(
      '-t, --template <string>',
      'Message template',
      'ListVersions, $name'
    )
    .requiredOption('-n, --name <string>', 'what is your name?')
    .action(listVersionsAction);
}

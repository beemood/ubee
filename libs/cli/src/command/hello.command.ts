import { Command } from 'commander';

export function helloCommand(program: Command): void {
  program
    .name('hello command')
    .description('Say hello')
    .requiredOption('-n, --name <string>', 'what is your name?')
    .action((args, options) => {
      console.log(`Hello, ${options.name}!`);
    });
}

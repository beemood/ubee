import { program } from 'commander/esm.mjs';
import { helloCommand } from './hello/hello.command';

/**
 * Boot cli program
 */
export function bootProgram() {
  program
    .name('ubeee cli')
    .description('Ubee command line interface')
    .version('0.0.1');

  helloCommand(program);

  program.parse();
}

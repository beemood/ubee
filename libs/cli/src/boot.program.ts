import { program } from 'commander/esm.mjs';
import { bindProgram } from './bind.program';

/**
 * Boot cli program
 */
export function bootProgram() {
  program
    .name('ubeee cli')
    .description('Ubee command line interface')
    .version('0.0.1');

  bindProgram(program);

  program.parse();
}

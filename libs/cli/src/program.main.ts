import { program } from 'commander/esm.mjs';
import { helloCommand } from './command/hello.command';

program.name('ubeee cli').description('Ubee command line interface');

helloCommand(program);

program.parse();

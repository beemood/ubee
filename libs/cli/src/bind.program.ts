import { Command } from 'commander';
import { contentCommand } from './command/content/content.command.js';
import { helloCommand } from './command/hello/hello.command.js';
import { listVersionsCommand } from './command/list-versions/list-versions.command.js';
import { renameCommand } from './command/rename/rename.command.js';
import { replaceCommand } from './command/replace/replace.command.js';

export function bindProgram(command: Command) {
  contentCommand(command);
  helloCommand(command);
  listVersionsCommand(command);
  renameCommand(command);
  replaceCommand(command);
}

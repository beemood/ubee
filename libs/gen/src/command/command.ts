import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { CommandGeneratorSchema } from './schema';

export async function commandGenerator(
  tree: Tree,
  options: CommandGeneratorSchema
) {
  const projectConfig = readProjectConfiguration(tree, options.project);

  const target = path.join(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    projectConfig.root!,
    'src',
    'command',
    names(options.name).fileName
  );

  generateFiles(tree, path.join(__dirname, 'files'), target, {
    ...names(options.name),
  });

  await formatFiles(tree);
}

export default commandGenerator;

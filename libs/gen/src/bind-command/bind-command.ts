import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';
import { readdir } from 'fs/promises';
import * as path from 'path';
import { BindCommandGeneratorSchema } from './schema';

export async function bindCommandGenerator(
  tree: Tree,
  options: BindCommandGeneratorSchema
) {
  const projectConfig = readProjectConfiguration(tree, options.project);

  const commands = await readdir(
    path.join(projectConfig.root, 'src', 'command')
  );

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    path.join(projectConfig.root, 'src'),
    {
      imports: commands
        .map(
          (e) =>
            `import { ${
              names(e).propertyName
            }Command } from './command/${e}/${e}.command.js';`
        )
        .join('\n'),
      binders: commands
        .map((e) => `${names(e).propertyName}Command(command);`)
        .join('\n'),
    }
  );

  await formatFiles(tree);
}

export default bindCommandGenerator;

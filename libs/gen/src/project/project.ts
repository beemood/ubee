import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  Tree,
  workspaceRoot,
} from '@nx/devkit';
import * as path from 'path';
import { ProjectGeneratorSchema } from './schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const { name, type } = options;
  const __names = names(name);

  const targetRoot = type === 'gen' || type === 'lib' ? 'libs' : 'apps';
  const source = path.join(__dirname, type);
  const target = path.join(targetRoot, __names.fileName);
  const pg = await readJsonFile(path.join(workspaceRoot, 'package.json'));
  const directory = `${targetRoot}/${__names.fileName}`;
  const projectName = [pg.name.split('/').pop(), __names.fileName].join('/');

  generateFiles(tree, source, target, {
    ...names(name),
    pg,
    directory,
    projectName,
  });
  await formatFiles(tree);
}

export default projectGenerator;

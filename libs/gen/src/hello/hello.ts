import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { HelloGeneratorSchema } from './schema';

export async function helloGenerator(
  tree: Tree,
  options: HelloGeneratorSchema
) {
  const projectRoot = `libs/${options.name}`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default helloGenerator;

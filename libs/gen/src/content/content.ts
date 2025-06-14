import {
  generateFiles,
  getProjects,
  readJsonFile,
  Tree,
  workspaceRoot
} from '@nx/devkit';
import * as path from 'path';

export async function contentGenerator(tree: Tree) {
  const projects = getProjects(tree);

  const packageJSONs: Record<string, string>[] = [];

  for (const [, value] of projects) {
    const packageJSON = await readJsonFile(
      path.join(value.root, 'package.json')
    );
    packageJSONs.push(packageJSON);
  }

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    path.join(workspaceRoot, 'content'),
    {
      content: JSON.stringify(packageJSONs),
    }
  );
}

export default contentGenerator;

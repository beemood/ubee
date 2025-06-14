import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  Tree,
  workspaceRoot,
} from '@nx/devkit';
import * as path from 'path';
import { ProjectGeneratorSchema, ProjectType } from './schema';

/**
 * Create the project name in the @<orgname>/<projectName> format.
 * @param workspaceProjectName workspace project name
 * @param currentProjectName the name of the project to be generated.
 * @returns project name
 */
export function __createProjectName(
  workspaceProjectName: string,
  currentProjectName: string
) {
  return [
    workspaceProjectName.split('/').shift(),
    names(currentProjectName).fileName,
  ].join('/');
}

/**
 * Get the root directory of the project by project type.
 * @param type type of the project
 * @returns 'apps' | 'libs'
 */
export function __getProjectRoot(type: ProjectType): 'apps' | 'libs' {
  return type === 'gen' || type === 'lib' ? 'libs' : 'apps';
}

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const { name, type } = options;
  const __names = names(name);

  const targetRoot = __getProjectRoot(type);
  const source = path.join(__dirname, type);
  const target = path.join(targetRoot, __names.fileName);
  const directory = `${targetRoot}/${__names.fileName}`;
  const pg = await readJsonFile(path.join(workspaceRoot, 'package.json'));
  const projectName = __createProjectName(pg.name, __names.fileName);

  generateFiles(tree, source, target, {
    ...names(name),
    pg,
    directory,
    projectName,
  });
  await formatFiles(tree);
}

export default projectGenerator;

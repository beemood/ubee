import { Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { projectGenerator } from './project';
import { ProjectGeneratorSchema } from './schema';

describe('project generator', () => {
  let tree: Tree;
  const options: ProjectGeneratorSchema = { name: 'test', type: 'api' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    const __generatorFiles = vi.spyOn('@nx/devkit', 'generateFiles');
    await projectGenerator(tree, options);
    expect(__generatorFiles).toHaveBeenCalledExactlyOnceWith(tree);
  });
});

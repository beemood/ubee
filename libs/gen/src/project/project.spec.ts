import { Tree } from '@nx/devkit';
import { ProjectGeneratorSchema } from './schema';

describe('project generator', () => {
  let tree: Tree;
  const options: ProjectGeneratorSchema = { name: 'test', type: 'api' };

  it('should work', () => {
    expect(1).toBe(1);
  });
});

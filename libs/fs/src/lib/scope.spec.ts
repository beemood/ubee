import { workspaceRoot } from '@nx/devkit';
import { FilePathIsOutOfScopeError } from '@ubee/error';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import { scope } from './scope.js';

describe('scope', async () => {
  const rootdir = join(workspaceRoot, 'test', 'scope');
  const resolve = scope(rootdir);

  beforeAll(async () => {
    await mkdir(rootdir, { recursive: true });
  });

  it('should resolve filepath', () => {
    expect(() => resolve('some')).toThrowError(FilePathIsOutOfScopeError);
  });
});

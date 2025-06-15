import { workspaceRoot } from '@nx/devkit';
import { FilePathIsOutOfScopeError } from '@ubee/error';
import { mkdir, rm } from 'fs/promises';
import { resolve as __resolve, join } from 'path';
import { scope } from './scope.js';

describe('scope', async () => {
  const rootdir = join(workspaceRoot, 'tmp', 'test', 'scope');
  const resolve = scope(rootdir);

  beforeAll(async () => {
    await mkdir(rootdir, { recursive: true });
  });

  afterAll(async () => {
    await rm(rootdir, { recursive: true });
  });

  it('should throw error for unsecure paths', () => {
    expect(() => resolve('some')).toThrowError(FilePathIsOutOfScopeError);
  });

  it('should resolve paths', () => {
    expect(resolve(join(rootdir, 'some'))).toEqual(__resolve(rootdir, 'some'));
  });
});

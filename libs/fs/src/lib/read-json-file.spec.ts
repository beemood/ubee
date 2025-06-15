import { workspaceRoot } from '@nx/devkit';
import { mkdir, rm } from 'fs/promises';
import { resolve as __resolve, normalize } from 'path';
import { readJsonFile } from './read-json-file.js';
import { scope } from './scope.js';
import { writeJsonFile } from './write-json-file.js';

describe('readJsonFile', async () => {
  const rootdir = normalize(
    __resolve(workspaceRoot, 'tmp', 'test', 'read-json-file')
  );
  const resolve = scope(rootdir);

  const filepath = resolve(rootdir, 'file.json');

  beforeAll(async () => {
    await mkdir(rootdir, { recursive: true });
    await writeJsonFile(filepath, { name: 'some' });
  });

  afterAll(async () => {
    await rm(rootdir, { recursive: true });
  });
  it('', async () => {
    expect(await readJsonFile(filepath)).toEqual({ name: 'some' });
  });
});

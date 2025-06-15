import { workspaceRoot } from '@nx/devkit';
import { mkdir, rm } from 'fs/promises';
import { join, normalize, resolve } from 'path';
import type { ReaddirResponse } from './readdir.js';
import { readdir } from './readdir.js';

describe('readdir', async () => {
  const rootdir = normalize(resolve(workspaceRoot, 'tmp', 'test', 'readdir'));

  beforeAll(async () => {
    await mkdir(rootdir, { recursive: true });

    await mkdir(join(rootdir, 'dir1'));
    await mkdir(join(rootdir, 'dir1', 'dir1'));
    await mkdir(join(rootdir, 'dir1', 'dir2'));
    await mkdir(join(rootdir, 'dir2'));
  });

  afterAll(async () => {
    await rm(rootdir, { recursive: true });
  });

  it('should read all directories under the provided directory', async () => {
    expect(await readdir(rootdir, { recursive: true })).toEqual([
      {
        filePath: resolve(rootdir, 'dir1'),
        isDirectory: true,
        isFile: false,
        subs: [
          {
            filePath: resolve(rootdir, 'dir1', 'dir1'),
            isDirectory: true,
            isFile: false,
            subs: [],
          },
          {
            filePath: resolve(rootdir, 'dir1', 'dir2'),
            isDirectory: true,
            isFile: false,
            subs: [],
          },
        ],
      },
      {
        filePath: resolve(rootdir, 'dir2'),
        isDirectory: true,
        isFile: false,
        subs: [],
      },
    ] as ReaddirResponse);
  });
});

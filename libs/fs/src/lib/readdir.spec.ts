import { mkdir } from 'fs/promises';
import { readdir } from './readdir.js';

describe('readdir', async () => {
  beforeAll(async () => {
    await mkdir('tmp');
  });
  it('should read all directories under the provided directory', async () => {
    const rootdir = 'rootdir';
    // const fsReaddir = vi.spyOn('readdir', 'fs/promise');
    // const resolve = vi.spyOn('resolve', 'path');
    // // const mockFsReaddir = vi.mock(fsReaddir, () => ['first', 'second']);
    // // const mockResolve = vi.mock(resolve, () => 'resolved');

    expect(await readdir(rootdir)).toEqual(['resolved', 'resolved']);
  });
});

import { forEachDir } from './for-each-dir';
import type { FileStat } from './readdir';
import { readdir } from './readdir';
export type RenameOptions = {
  rootdir: string;
  pattern?: string;
  from?: string[];
  to?: string[];
  recursive?: boolean;
};

export async function rename(options: RenameOptions): Promise<void> {
  const exp = new RegExp(options.pattern || '*', 'g');

  await forEachDir(options.rootdir, async (f: FileStat) => {
    if (exp.test(f.fileName)) {
        // 
    }
  });
  const foundFiles = await readdir(options.rootdir);
}

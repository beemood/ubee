import { FilePathIsOutOfScopeError } from '@ubee/error';
import { normalize, resolve } from 'path';

export type ResolvePathFn = (...args: string[]) => string;

/**
 * Create a resolve function that resolve path if the path is not out of he provided directory ({@link rootdir})
 * @param rootdir root directory
 * @returns resolve function {@link ResolvePathFn}
 */
export function scope(rootdir: string): ResolvePathFn {
  const scopedPath = normalize(resolve(rootdir));
  return (...args: string[]) => {
    const resolvedFilepath = normalize(resolve(...args));
    if (resolvedFilepath.startsWith(scopedPath)) return resolvedFilepath;

    throw new FilePathIsOutOfScopeError(resolvedFilepath);
  };
}

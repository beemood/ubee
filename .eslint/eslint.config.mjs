import nx from '@nx/eslint-plugin';
import ignore from './ignore.mjs';
import moduleBoundaries from './module-boundaries.mjs';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ignore,
  moduleBoundaries,
];

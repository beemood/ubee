import { listVersionsAction } from './list-versions.action.js';

describe('listVersions', () => {
  it('should run with the provided parameters', () => {
    const consoleLog = vi.spyOn(console, 'log');
    listVersionsAction({ name: 'Some', template: 'How you doing, $name' });
    expect(consoleLog).toHaveBeenCalledExactlyOnceWith('How you doing, Some');
  });
});

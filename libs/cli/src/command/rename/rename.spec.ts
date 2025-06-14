import { renameAction } from './rename.action.js';

describe('rename', () => {
  it('should run with the provided parameters', () => {
    const consoleLog = vi.spyOn(console, 'log');
    renameAction({ name: 'Some', template: 'How you doing, $name' });
    expect(consoleLog).toHaveBeenCalledExactlyOnceWith('How you doing, Some');
  });
});

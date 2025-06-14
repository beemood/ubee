import { replaceAction } from './replace.action.js';

describe('replace', () => {
  it('should run with the provided parameters', () => {
    const consoleLog = vi.spyOn(console, 'log');
    replaceAction({ name: 'Some', template: 'How you doing, $name' });
    expect(consoleLog).toHaveBeenCalledExactlyOnceWith('How you doing, Some');
  });
});

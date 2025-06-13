import { helloAction } from './hello.action.js';

describe('hello', () => {
  it('should run with the provided parameters', () => {
    const consoleLog = vi.spyOn(console, 'log');
    helloAction({ name: 'Some', template: 'How you doing, $name' });
    expect(consoleLog).toHaveBeenCalledExactlyOnceWith('How you doing, Some');
  });
});

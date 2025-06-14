import { contentAction } from './content.action.js';

describe('content', () => {
  it('should run with the provided parameters', () => {
    const consoleLog = vi.spyOn(console, 'log');
    contentAction({ name: 'Some', template: 'How you doing, $name' });
    expect(consoleLog).toHaveBeenCalledExactlyOnceWith('How you doing, Some');
  });
});

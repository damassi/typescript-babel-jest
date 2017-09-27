jest.mock('tsconfig', () => ({
    loadSync: jest.fn(() => ({ config: 'config' })),
}));

import { loadConfig } from 'utils';
import { loadSync } from 'tsconfig';

const cwd = __dirname;
const config = loadConfig(cwd);

test('should returns config property', () => {
    expect(config).toBe('config');
});

test('should call with cwd paramter', () => {
    expect(loadSync).toBeCalledWith(cwd);
});
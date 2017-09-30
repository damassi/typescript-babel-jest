jest.mock('tsconfig', () => ({
    loadSync: jest.fn(() => ({ config: { compilerOptions: 'compilerOptions' } })),
}));

import { loadConfig } from 'utils';
import { loadSync } from 'tsconfig';

const cwd = __dirname;
const compilerOptions = loadConfig(cwd);

test('should returns compilerOptions property', () => {
    expect(compilerOptions).toBe('compilerOptions');
});

test('should call with cwd paramter', () => {
    expect(loadSync).toBeCalledWith(cwd);
});
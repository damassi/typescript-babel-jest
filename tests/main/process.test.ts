jest
    .mock('typescript', () => ({
        transpile: jest.fn(() => 'transpile'),
    }))
    .mock('babel-jest', () => ({
        process: jest.fn(() => 'process'),
    }))
    .mock('utils/config', () => ({
        default: jest.fn(() => ({
            compilerOptions: 'compilerOptions',
        })),
    }));

import { process } from 'main';
import { Source, Path, loadConfig } from 'utils';

const input = 'input';
const cwd = 'cwd';
const source = new Source(input);

describe('typescript', () => {
    const path = new Path('name');

    process(source, path, cwd);
});

describe('javascript', () => {
    const path = new Path('name');

    process(source, path, cwd);
});

test('should call loadConfig with cwd', () => {
    expect(loadConfig).toBeCalledWith(cwd);
});
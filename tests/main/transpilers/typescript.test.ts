jest
    .mock('typescript', () => ({
        transpile: jest.fn(v => v),
    }))
    .mock('utils/config', () => ({
        default: jest.fn(v => v),
    }));

import * as typescript from 'typescript';

import transpile from 'main/transpilers/typescript';

test('should call transpile function of typescript module', () => {
    const options = { file: 'file', cwd: 'cwd' };
    const input = 'input';
    const result  = transpile(options, input);

    expect(result).toBe(input);
    expect(typescript.transpile).toBeCalledWith(input, options.cwd, options.file);
});
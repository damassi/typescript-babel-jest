jest.mock('babel-jest', () => ({
    process: jest.fn(v => v),
}));

import { process } from 'babel-jest';

import transpile from 'main/transpilers/babel';

test('should call process function of babel-jest module', () => {
    const options = { file: 'file' };
    const input = 'input';
    const result  = transpile(options, input);

    expect(result).toBe(input);
    expect(process).toBeCalledWith(input, options.file);
});
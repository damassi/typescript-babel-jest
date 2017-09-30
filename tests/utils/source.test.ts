import { Source } from 'utils';

const input = 'input';
const source = new Source(input);

const str = 'test';
const mock = jest.fn(v => v + str);

const result = source.apply(
    [true, mock],
    [false, mock],
    [true, mock],
);

test('should call the modifier function', () => {
    expect(mock).toHaveBeenCalledTimes(2);
});

test('should apply modifiers to input', () => {
    expect(result).toBe(`${input}${str}${str}`);
});
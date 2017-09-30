import { curryTranspile } from 'utils';

const transpile = jest.fn();
const result = curryTranspile(transpile);
const options = 'options';
const input = 'input';

const withOptions = result(options);

test('should call with options and input', () => {
    expect(transpile).not.toBeCalled();

    withOptions(input);

    expect(transpile).toBeCalledWith(options, input);
});
jest.mock('utils');

import { preprocess } from 'main';
import { Source, Path } from 'utils';

function getInstance(val: any) {
    const [instance] = val.mock.instances;
    return instance;
}

const mock = jest.fn();
const create = preprocess(mock);
const input = 'input';
const name = 'name';
const options = { cwd: 'cwd' };

create(input, name, options);

test('should call Source with input', () => {
    expect(Source).toBeCalledWith(input);
});

test('should call Path with name', () => {
    expect(Path).toBeCalledWith(name);
});

test('should call callback function with parameters', () => {
    expect(mock).toBeCalledWith(
        getInstance(Source),
        getInstance(Path),
        options.cwd,
    );
});
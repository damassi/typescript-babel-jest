jest
    .mock('main/process', () => ({
        default: 'process',
    }))
    .mock('main/preprocess', () => ({
        default: jest.fn(),
    }));

import 'main';
import preprocess from 'main/preprocess';

test('preprocess function should be called with process function as argument', () => {
    expect(preprocess).toBeCalledWith('process');
});
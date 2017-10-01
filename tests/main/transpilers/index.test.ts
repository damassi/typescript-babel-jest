jest
    .mock('utils/curry-transpile', () => ({
        default: jest.fn(),
    }))
    .mock('main/transpilers/typescript', () => ({
        default: 'typescript',
    }))
    .mock('main/transpilers/babel', () => ({
        default: 'babel',
    }));

import 'main/transpilers';
import { curryTranspile } from 'utils';

test('curryTranspile function should be called with typescript and babel arguments', () => {
    const mockCurryTranspile = curryTranspile as jest.Mock<Function>;

    expect(mockCurryTranspile.mock.calls).toEqual([['typescript'], ['babel']]);
});
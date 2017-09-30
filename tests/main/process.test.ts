jest.mock('main/transpilers', () => ({
    default: {
        typescript: jest.fn(() => 'typescript'),
        babel: jest.fn(() => 'babel'),
    },
}));

import process from 'main/process';
import transpilers from 'main/transpilers';

const source: any = {
    apply: jest.fn(() => 'apply'),
};
const cwd = 'cwd';

afterAll(jest.clearAllMocks);

describe('typescript', () => {
    const path = {
        isJavaScript: false,
        isTypeScript: true,
        file: 'file',
    };
    const result = process(source, path, cwd);

    test('should call apply method with arguments', () => {
        expect(source.apply).toBeCalledWith([true, 'typescript'], [true, 'babel']);
    });

    test('should returns result of apply', () => {
        expect(result).toBe('apply');
    });

    test('typescript transpiler should be called', () => {
        expect(transpilers.typescript).toBeCalledWith({
            cwd,
            file: path.file,
        });
    });

    test('babel transpiler should be called', () => {
        expect(transpilers.babel).toBeCalledWith({
            file: 'file.js',
        });
    });
});

describe('javascript', () => {
    const path = {
        isJavaScript: true,
        isTypeScript: false,
        file: 'file',
    };
    const result = process(source, path, cwd);

    test('should call apply method with arguments', () => {
        expect(source.apply).toBeCalledWith([false, 'typescript'], [true, 'babel']);
    });

    test('typescript transpiler should not be called', () => {
        expect(transpilers.typescript).toBeCalledWith({
            cwd,
            file: path.file,
        });
    });

    test('babel transpiler should be called', () => {
        expect(transpilers.babel).toBeCalledWith({
            file: 'file.js',
        });
    });

    test('should returns result of apply', () => {
        expect(result).toBe('apply');
    });
});
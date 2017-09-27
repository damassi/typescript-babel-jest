import { Path } from 'utils';

test('should detect javascript by js file extension', () => {
    const name = 'file.js';
    const path = new Path(name);

    expect(path.isJavaScript).toBeTruthy();
    expect(path.isTypeScript).toBeFalsy();
    expect(path.file).toBe(name);
});

test('should detect javascript by jsx file extension', () => {
    const name = 'file.jsx';
    const path = new Path(name);

    expect(path.isJavaScript).toBeTruthy();
    expect(path.isTypeScript).toBeFalsy();
    expect(path.file).toBe(name);
});

test('should detect typescript by ts file extension', () => {
    const name = 'file.ts';
    const path = new Path(name);

    expect(path.isJavaScript).toBeFalsy();
    expect(path.isTypeScript).toBeTruthy();
    expect(path.file).toBe('file.js');
});

test('should detect typescript by tsx file extension', () => {
    const name = 'file.tsx';
    const path = new Path(name);

    expect(path.isJavaScript).toBeFalsy();
    expect(path.isTypeScript).toBeTruthy();
    expect(path.file).toBe('file.js');
});
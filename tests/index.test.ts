import * as prerpocessor from 'index';

test('preprocessor should be the object with process property', () => {
    expect(prerpocessor).toHaveProperty('process');
});
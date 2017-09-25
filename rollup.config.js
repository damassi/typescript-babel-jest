import fileSize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';

export default {
    input: 'lib/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: [
        "babel-jest",
        "tsconfig",
        "typescript",
        "tslib",
    ],
    plugins: [
        includePaths({
            paths: ['lib'],
        }),
        fileSize(),
    ],
};
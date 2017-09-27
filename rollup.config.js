import fileSize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'source/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: [
        "babel-jest",
        "tsconfig",
        "typescript",
    ],
    plugins: [
        typescript(),
        includePaths({
            paths: ['lib'],
        }),
        fileSize(),
    ],
};
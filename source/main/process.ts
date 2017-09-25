import * as typescript from 'typescript';
import * as babel from 'babel-jest';

import { Path, Source, loadConfig } from 'utils';

export interface IOptions {
    cwd: string;
}

export function preprocess(callback: (source: Source, path: Path, cwd: string) => string) {
    return function create(input: string, name: string, options: IOptions) {
        return callback(new Source(input), new Path(name), options.cwd);
    };
}

export default function process(source: Source, path: Path, cwd: string) {
    const { isJavaScript, isTypeScript, name } = path;
    const config = loadConfig(cwd);

    return source
        .apply([
            [isTypeScript, input => typescript.transpile(
                input,
                config.compilerOptions,
                name,
            )],

            [isJavaScript || isTypeScript, input => babel.process(
                input,
                path.file,
            )],
        ]);
}

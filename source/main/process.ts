import * as typescript from 'typescript';
import * as babel from 'babel-jest';

import { Path, Source, loadConfig } from 'utils';

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

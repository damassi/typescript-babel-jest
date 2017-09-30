import { Path, Source } from 'utils';

import transpilers from './transpilers';

export default function process(source: Source, path: Path, cwd: Global.TCwd) {
    const { isJavaScript, isTypeScript, file } = path;

    return source.apply(
        [isTypeScript, transpilers.typescript({
            cwd,
            file,
        })],

        [isJavaScript || isTypeScript, transpilers.babel({
            file: 'file.js',
        })],
    );
}

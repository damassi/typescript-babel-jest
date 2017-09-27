import { Path, Source } from 'utils';

interface IOptions {
    cwd: string;
}

export default function preprocess(callback: (source: Source, path: Path, cwd: string) => string) {
    return function create(input: string, name: string, options: IOptions) {
        return callback(new Source(input), new Path(name), options.cwd);
    };
}
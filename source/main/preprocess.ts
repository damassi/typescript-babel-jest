import { Path, Source } from 'utils';

interface IOptions {
    cwd: Global.TCwd;
}

export default function preprocess(callback: (source: Source, path: Path, cwd: Global.TCwd) => Global.TInput) {
    return function create(input: Global.TInput, file: Global.TFile, options: IOptions) {
        return callback(new Source(input), new Path(file), options.cwd);
    };
}
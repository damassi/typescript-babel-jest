import * as typescript from 'typescript';

import { loadConfig } from 'utils';

interface IOptions {
    cwd: Global.TCwd;
    file: Global.TFile;
}

export default function transpile(options: IOptions, input: Global.TInput) {
    return typescript.transpile(
        input,
        loadConfig(options.cwd),
        options.file,
    );
}
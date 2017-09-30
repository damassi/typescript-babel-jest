import * as babel from 'babel-jest';

interface IOptions {
    file: Global.TFile;
}

export default function transpile(options: IOptions, input: Global.TInput) {
    return babel.process(
        input,
        options.file,
    );
}
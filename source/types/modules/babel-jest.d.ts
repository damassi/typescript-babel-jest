declare module 'babel-jest' {
    interface IBabelJest {
        process(input: Global.TInput, file: Global.TFile): Global.TInput;
    }

    const babelJest: IBabelJest;

    export = babelJest;
}
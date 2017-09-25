declare module 'babel-jest' {
    interface IBabelJest {
        process(input: string, path: string): string;
    }

    const babelJest: IBabelJest;

    export = babelJest;
}
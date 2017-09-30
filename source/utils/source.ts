export default class Source {
    private readonly input: Global.TInput;

    constructor(input: Global.TInput) {
        this.input = input;
    }

    apply(...args: [boolean, (input: Global.TInput) => Global.TInput][]) {
        return args
            .reduce((result, [condition, fn]) => condition
                ? fn(result)
                : result,
                this.input,
            );
    }
}
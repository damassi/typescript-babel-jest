export default class Source {
    private readonly input: string;

    constructor(input: string) {
        this.input = input;
    }

    apply(modifiers: [boolean, (input: string) => string][]) {
        return modifiers
            .reduce((result, [condition, fn]) => condition
                ? fn(result)
                : result,
                this.input,
            );
    }
}
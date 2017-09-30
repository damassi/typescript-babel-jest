export default function curryTranspile<T>(transpile: (options: T, input: Global.TInput) => Global.TInput) {
    return function create(options: T): (input: Global.TInput) => Global.TInput {
        return transpile.bind(null, options);
    };
}
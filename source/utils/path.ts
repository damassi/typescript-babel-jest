const FAKE_NAME = 'file.js';

export default class Path {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    get isTypeScript() {
        const { name } = this;

        return name.endsWith('.ts')
            || name.endsWith('.tsx');
    }

    get isJavaScript() {
        const { name } = this;

        return name.endsWith('.js')
            || name.endsWith('.jsx');
    }

    get file() {
        return this.isJavaScript
            ? this.name
            : FAKE_NAME;
    }
}
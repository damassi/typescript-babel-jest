export default class Path {
    readonly file: Global.TFile;

    constructor(file: Global.TFile) {
        this.file = file;
    }

    get isTypeScript() {
        const { file } = this;

        return file.endsWith('.ts')
            || file.endsWith('.tsx');
    }

    get isJavaScript() {
        const { file } = this;

        return file.endsWith('.js')
            || file.endsWith('.jsx');
    }
}
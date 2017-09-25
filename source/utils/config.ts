import * as tsConfig from 'tsconfig';

export default function loadConfig(cwd: string) {
    const { config } = tsConfig.loadSync(cwd);

    return config;
}
import { loadSync } from 'tsconfig';

export default function loadConfig(cwd: Global.TCwd) {
    const { config } = loadSync(cwd);

    return config.compilerOptions;
}
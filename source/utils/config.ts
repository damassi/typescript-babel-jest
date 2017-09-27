import { loadSync } from 'tsconfig';

export default function loadConfig(cwd: string) {
    const { config } = loadSync(cwd);

    return config;
}
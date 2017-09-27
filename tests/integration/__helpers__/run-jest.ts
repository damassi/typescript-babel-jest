// from: https://github.com/facebook/jest/blob/master/integration_tests/runJest.js

import * as path from 'path';
import { fileExists } from './utils';

const { sync: spawnSync } = require('cross-spawn');

const JEST_PATH = path.resolve(__dirname, '../../packages/jest-cli/bin/jest.js');

export type RunJestOptions = {
    nodePath?: string,
    skipPkgJsonCheck?: boolean,
};

export default function runJest(
    dir: string,
    args?: Array<string>,
    options: RunJestOptions = {},
) {
    const isRelative = dir[0] !== '/';

    if (isRelative) {
        dir = path.resolve(__dirname, dir);
    }

    const localPackageJson = path.resolve(dir, 'package.json');
    if (!options.skipPkgJsonCheck && !fileExists(localPackageJson)) {
        throw new Error(
            `
      Make sure you have a local package.json file at
        "${localPackageJson}".
      Otherwise Jest will try to traverse the directory tree and find the
      the global package.json, which will send Jest into infinite loop.
    `,
        );
    }

    const env = options.nodePath
        ? Object.assign({}, process.env, {
            NODE_PATH: options.nodePath,
        })
        : process.env;
    const result = spawnSync(JEST_PATH, args || [], {
        cwd: dir,
        env,
    });

    result.stdout = result.stdout && result.stdout.toString();
    result.stderr = result.stderr && result.stderr.toString();

    return result;
}

export function json(dir: string, args?: Array<string>) {
    args = Array.prototype.concat(args || [], '--json');
    const result = runJest(dir, args);
    try {
        result.json = JSON.parse((result.stdout || '').toString());
    } catch (e) {
        throw new Error(
            `
      Can't parse JSON.
      ERROR: ${e.name} ${e.message}
      STDOUT: ${result.stdout}
      STDERR: ${result.stderr}
    `,
        );
    }
    return result;
}

const { exec } = require('child_process');
const { exit } = require('process');
const { version } = require('../package.json');

async function isGitBranch(branch) {
    return await new Promise((resolve, reject) => exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
        let error = undefined;
        if (err) error = err.message;
        else if (typeof stdout !== 'string') throw new Error('Unrecognized stdout result');
        else if (stdout.trim() !== branch) throw new Error(`You need to be on branch "${branch}" to publish, current branch: "${stdout}"`);

        if (error) reject(error);
        else resolve();
    }));
}

async function isGitClean() {
    return await new Promise((resolve, reject) => exec('git status --porcelain', (err, stdout) => {
        let error = undefined;
        if (err) error = err.message;
        console.log(stdout);
        const isString = typeof stdout === 'string';
        console.log(isString);
        if (isString) {
            const isEmpty = stdout.length === 0;
            console.log(isEmpty);
        }

        if (error) reject(error);
        else resolve();
    }));
}

try {
    isGitBranch('matthewdowns/setup-publishing').then(() => isGitClean());
} catch(e) {
    console.error(e);
}

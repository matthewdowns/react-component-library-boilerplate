const { exec } = require('child_process');
const { exit } = require('process');
const { version } = require('../package.json');

isGitBranch('matthewdowns/setup-publishing')
    .then(() => isGitDirectoryClean()
        .catch(e => error(e)))
    .catch(e => error(e));

async function isGitBranch(branch) {
    return await new Promise((resolve, reject) => exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
        let error = undefined;
        if (err) error = err.message;
        else if (typeof stdout !== 'string') error = 'Unrecognized stdout result';
        else if (stdout.trim() !== branch) error = `You need to be on branch "${branch}" to publish, current branch: "${stdout}"`;

        if (error) reject(error);
        else resolve();
    }));
}

async function isGitDirectoryClean() {
    return await new Promise((resolve, reject) => exec('git status --porcelain', (err, stdout) => {
        let error = undefined;
        if (err) error = err.message;
        else if (typeof stdout !== 'string') error = 'Unrecognized stdout result';
        else if (stdout.trim().length !== 0) error = 'Git directory is not clean';

        if (error) reject(error);
        else resolve();
    }));
}

function error(e) {
    console.error(e);
    exit(1);
}

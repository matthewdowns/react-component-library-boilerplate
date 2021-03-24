const { exec } = require('child_process');
const { exit } = require('process');

exec('git status --porcelain', (err, stdout) => {
    let error = undefined;
    if (err) error = err.message;
    else if (typeof stdout !== 'string') error = 'Unrecognized stdout result';
    else if (stdout.trim().length !== 0) error = 'Git directory is not clean';

    if (error) {
        console.error(error);
        exit(1);
    }
});

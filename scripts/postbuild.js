const { copyFileSync, existsSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');
const pkg = require('../package.json');

const basePath = resolve(__dirname, '../');
const distPath = resolve(__dirname, '../dist');

// Copy modified package.json
writeFileSync(join(distPath, 'package.json'), JSON.stringify({
    ...pkg,
    private: false
}, null, 4));

// Copy README.md
copyFileSync(join(basePath, 'README.md'), join(distPath, 'README.md'));

// Copy LICENSE
copyFileSync(join(basePath, 'LICENSE'), join(distPath, 'LICENSE'));

// Copy .npmrc, if it exists
if (existsSync(join(basePath, '.npmrc'))) copyFileSync(join(basePath, '.npmrc'), join(distPath, '.npmrc'));

import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { join, resolve } from 'path';
import { dependencies } from './package.json';

const srcPath = resolve(__dirname, './src');
const distPath = resolve(__dirname, './dist');

const input = resolve(__dirname, './src/index.ts');

const external = Object.keys(dependencies);
const umdName = 'rclb';

export default [
    {
        input,
        output: [
            {
                dir: distPath,
                format: 'esm',
                sourcemap: true
            },
            {
                file: join(distPath, `umd/${umdName}.js`),
                format: 'umd',
                name: umdName,
                sourcemap: true,
                globals: {
                    'react': 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        ],
        plugins: [
            nodeResolve(),
            typescript(),
            postcss({
                extract: false,
                minimize: false,
                modules: true,
                sourceMap: true,
                use: {
                    less: { javascriptEnabled: true }
                }
            })
        ],
        external
    },
    {
        input,
        output: {
            file: join(distPath, `dist/umd/${umdName}.min.js`),
            format: 'umd',
            name: umdName,
            sourcemap: false,
            globals: {
                'react': 'React',
                'react-dom': 'ReactDOM'
            }
        },
        plugins: [
            nodeResolve(),
            typescript({
                declaration: false,
                declarationMap: false,
                sourceMap: false,
                removeComments: true
            }),
            terser(),
            postcss({
                extract: true,
                minimize: true,
                modules: true,
                sourceMap: false,
                use: {
                    less: { javascriptEnabled: true }
                }
            }),
            copy({
                targets: [
                    { src: join(srcPath, 'styles'), dest: distPath }
                ]
            })
        ],
        external
    }
]

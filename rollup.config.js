import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { resolve } from 'path';
import { dependencies } from './package.json';

export default [
    {
        input: resolve(__dirname, './src/index.ts'),
        output: [
            {
                dir: resolve(__dirname, './dist'),
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            nodeResolve(),
            typescript(),
            postcss({
                extract: true,
                minimize: true,
                modules: true,
                sourceMap: true,
                use: ['less']
            })
        ],
        external: Object.keys(dependencies)
    }
]

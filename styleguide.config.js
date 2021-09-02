const { resolve } = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
    title: 'React Component Library Boilerplate',
    components: 'src/lib/**/*.tsx',
    webpackConfig: {
        entry: resolve(__dirname, './src/index.tsx'),
        output: {
            filename: '[name].[chunkhash].js',
            path: resolve(__dirname, './dist'),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.less', '.js', '.json', '.ts', '.tsx'],
            plugins: [
                new TsconfigPathsWebpackPlugin()
            ]
        },
        plugins: [
            new DefinePlugin({
                process: { env: { } }
            })
        ],
        devtool: 'source-map',
        devServer: {
            contentBase: '/',
            publicPath: '/',
            historyApiFallback: true,
            port: 8080
        }
    }
}

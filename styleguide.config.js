const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { join } = require('path')
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')
const { DefinePlugin } = require('webpack')
const pkg = require('./package.json')

module.exports = {
  title: 'React Component Library Boilerplate',
  version: pkg.version,
  components: join(__dirname, 'src/lib/**/*.tsx'),
  require: [
    join(__dirname, 'styleguide/setup.js'),
    join(__dirname, 'styleguide/styles.css')
  ],
  assetsDir: join(__dirname, 'styleguide/assets'),
  styleguideDir: join(__dirname, 'docs'),
  template: {
    favicon: 'favicon.ico',
    head: {
      links: [
        { href: 'site.webmanifest', rel: 'manifest' }
      ]
    }
  },
  ribbon: {
    text: 'View on GitHub',
    url: pkg.homepage
  },
  webpackConfig: {
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
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.css', '.less', '.js', '.json', '.ts', '.tsx'],
      plugins: [
        new TsconfigPathsWebpackPlugin()
      ]
    },
    plugins: [
      new DefinePlugin({
        process: { env: { } }
      }),
      new NodePolyfillPlugin()
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: '/',
      publicPath: '/',
      port: 8080,
      inline: true,
      hot: true,
      watchContentBase: true
    }
  }
}

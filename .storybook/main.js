module.exports = {
    addons: [
        '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-essentials'
    ],
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push(
            {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    require.resolve('less-loader')
                ]
            }
        );

        return config;
    }
}

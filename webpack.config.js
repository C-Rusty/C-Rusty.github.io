const path = require('path');

const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: `production`,
    entry: `./src/index.tsx`,
    output: {
        path: path.join(__dirname, `public`),
        filename: `./bundle.js`,
        publicPath: `/`
    },
    resolve: {
        extensions: ['.js', '.jsx', `.tsx`, `.ts`]
    },
    devServer : {
        port: 8080,
        host: `0.0.0.0`,
        open: true,
        hot: true,
        static: './public',
        compress: true,
        historyApiFallback: { index: "/", disableDotRule: true },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `./src/view/index.html`,
            favicon: './src/view/favicon.svg',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: `./src/images`, to: `images`}
            ]
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: `/node_modules/`,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`@babel/preset-env`, `@babel/preset-react`, `@babel/preset-typescript`]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|svg|webp)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[contenthash].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    outputPath: `fonts`
                }
            }
        ]
    }
}
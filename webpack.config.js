const path = require('path');

const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: `production`,
    entry: `./src/index.tsx`,
    output: {
        path: path.join(__dirname, `public`),
        filename: `bundle.js`
    },
    resolve: {
        extensions: ['.js', '.jsx', `.tsx`, `.ts`]
    },
    devServer : {
        port: 8080,
        open: true,
        hot: true,
        static: './public'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `./src/view/index.html`,
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
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[contenthash].[ext]'
                }
            }
        ]
    }
}
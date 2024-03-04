const path = require('path');

const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: `./src/index.tsx`,
    output: {
        filename: `./[name].bundle.js`,
        path: path.join(__dirname, `public`),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', `.tsx`, `.ts`]
    },
    devServer : {
        port: 8080,
        open: true,
        hot: true,
        static: './public',
        compress: true,
        historyApiFallback: { index: "/", disableDotRule: true },
    },
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
				test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
            {
                test: /\.(png|jpe?g|svg|webp)(\?.*)?$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            }
        ],
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
        new MiniCssExtractPlugin({
            filename: `main.css`
        }),
        // new BundleAnalyzerPlugin(),
    ],
    optimization: {
        minimize: true,
        mergeDuplicateChunks: true,
    },
}
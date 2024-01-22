const path = require('path');

const HTMLWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
    mode: `development`,
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
            template: `./src/index.html`
        }),
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
        ]
    }
}
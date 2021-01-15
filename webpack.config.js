const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';

const {
    resolve
} = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    /*
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css'
        })
    ],
    */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                loader: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
          'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: {
        // Don't bundle react or react-dom      
        react: {
          commonjs: "react",
          commonjs2: "react",
          amd: "React",
          root: "React"
        },
        "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "ReactDOM",
          root: "ReactDOM"
        }
    }
};
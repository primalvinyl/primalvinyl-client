module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/bin/www',
    output: {
        path: __dirname,
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [__dirname],
                use: 'babel-loader'
            }
        ]
    },
    node: {
        __dirname: false
    }
};

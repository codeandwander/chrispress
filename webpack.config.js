const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: '../style.css'
})

module.exports = {
    context: __dirname,
    entry: './js/index.js',
    output: {
        path: __dirname + '/js',
        filename: 'index.min.js'
    },

    module: {
        rules: [{
          test: /\.scss$/,
          use: extractSass.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  autoprefixer: true,
                  minimize: debug ? false : true
                }
              },
              'postcss-loader',
              {
                loader: 'sass-loader',
                query: {
                  sourceMap: false,
                }
              },
            ],
          })
        }]
    },

    plugins: debug ? [
        extractSass,
    ] : [
        extractSass,
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true,
            minimize: false
        }),
    ],
}

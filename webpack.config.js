const path = require('path')
const fs = require('fs')
const chalkAnimation = require('chalk-animation')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const PORT = '8000'
const HOST = 'localhost'

const paths = {
  appAssets: resolveApp('src/assets'),
  appBuild: resolveApp('build'),
  appConfig: resolveApp('config'),
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.tsx'),
  appSrc: resolveApp('src')
}

module.exports = {
  entry: {
    main: paths.appIndexJs,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: paths.appBuild,
    filename: '[hash]_[name].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  devtool: 'eval', // fastest mode for development
  devServer: {
    contentBase: './src/',
    open: false,
    port: PORT,
    overlay: {
      warnings: false,
      errors: true
    },
    quiet: false,
    noInfo: true, // hide build info in console
    watchContentBase: true, // reload page if static files change
    after() {
      chalkAnimation.rainbow(`Its Wednesday my dudes! http://${HOST}:${PORT}\n`, 0.3)
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [path.resolve(paths.appSrc, 'styles')],
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin([
      { from: paths.appAssets, to: 'assets' }
    ])
  ],
}

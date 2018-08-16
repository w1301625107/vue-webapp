/**dev
 * 
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function assetsPath(_path) {
  return path.join(__dirname, '../dist/', _path)
}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

console.log(resolve('src/main.js'));
console.log(resolve('index.html'));
console.log(resolve('dist/'));
console.log(__dirname)

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: resolve('src/main.js'),

  output: {
    path: resolve('dist'),
    filename: "bundle.js",
    //chunkFilename:'[name].chunk.js',
    //publicPath:'./js/'
  },

  // devServer: {
  //   clientLogLevel: 'warning',
  //   historyApiFallback:true,
  //   hot: true,
  //   contentBase: false, // since we use CopyWebpackPlugin.
  //   compress: true,
  //   open: true,
  //   //publicPath: assetsPath(),
  //   quiet: true, // necessary for FriendlyErrorsPlugin
  // },

  // 加载器
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },


  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@views': resolve('src/views'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      filename: assetsPath('index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(), //热加载插件
    new VueLoaderPlugin()

  ],
}
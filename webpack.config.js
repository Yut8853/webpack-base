const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    // publicPath: 'dist/',
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      // HTML
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      // CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //Javascript
      {
        test: /\.(js|ts|tsx)$/,
        // node_modulesは対象外
        exclude: /node_modules/,
        //トランスコンパイラ
        loader: "babel-loader",
      },
      //Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      //Shader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({						//	追加
			inject: 'body',
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['main'],
		}),
  ],
  resolve: {
    extensions: [".js", ".glsl", "vs", "fs"],
  },
};

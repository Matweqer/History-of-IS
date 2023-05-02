import path from 'path';
import {fileURLToPath} from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackConfig = () => ({
  entry: "./src/index.tsx",
  ...(process.env.production || !process.env.development
    ? {}
    : { devtool: "eval-source-map" }),

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.scss$/,
        use: [
          {
              loader: "style-loader"
          },
          {
              loader: "css-loader"
          },
          {
              loader: "sass-loader"
          }
        ]
      },
      {
          test: /\.svg$/,
          loader: 'svg-sprite-loader'
      },
      {
          test: /\.(jpe?g|gif|jpg|png|svg|woff|ttf|wav|mp3)$/,
          loader: "file-loader",
          include: '/*/**'
      }
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.[hash].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
});

export default webpackConfig;

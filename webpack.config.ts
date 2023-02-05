import * as path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    clean: true,
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: ['/node-modules/', 'test/*'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './LICENSE.md', to: './LICENSE.md' },
        { from: './package.json', to: './package.json' },
        { from: './README.md', to: './README.md' },
      ],
    }),
  ],
  // 设置哪些文件类型可以作为模块被引用
  resolve: {
    extensions: ['.ts', '.js'],
  },
}

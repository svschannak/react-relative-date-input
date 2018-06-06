const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: "umd",
    library: "RelativeDatePicker",
  },
  module: {
      rules: [
        {
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["env", "stage-2", "react"],
                plugins: ['transform-class-properties']
            }
        }
      ]
  }
};
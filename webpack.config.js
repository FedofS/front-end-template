module.exports = {
  entry: {
    App: "./public/scripts/main.js",
    Vendor: "./public/scripts/Vendor.js"
  },
  output: {
    path: "./public/dist/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
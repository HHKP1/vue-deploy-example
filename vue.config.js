module.exports = {
  devServer: {
      proxy: 'http://localhost:8080'
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-deploy-example'
    : '/',
    outputDir: './public/',
    assetsDir: './assets/',
    lintOnSave: false,
    pages: {
        index: {
          entry: 'src/main.js',
          template: 'src/public/index.html',
          filename: 'index.html',
        },
    },
  }
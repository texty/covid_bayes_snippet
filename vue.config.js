module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  chainWebpack: config => {
    config.module
      .rule('csv-loader')
      .test(/\.csv$/)
      .use('csv-loader')
        .loader('csv-loader')
        .options({
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        })
  },


  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      // title: "hui",
      chunks: ['chunk-vendors', 'chunk-common', 'index']

    },
    sentence: {
      entry: 'src/sentence.js',
      template: 'public/index.html',
      // title: "hui",
      chunks: ['chunk-vendors', 'chunk-common', 'sentence']
    }
  }


}
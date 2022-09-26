const { defineConfig } = require('@vue/cli-service')

const path = require('path')

module.exports = defineConfig({

  transpileDependencies: true,

  outputDir:'./docs',

  publicPath:'/shopji/',
  
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
  },
  
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/modules.scss";
        `
      }
    }
  },
  
})
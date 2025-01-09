/*
Path: vue.config.js
Este script se encarga de cargar la configuración de la aplicación.
*/

const { defineConfig } = require('@vue/cli-service')
const finalConfig = require('./src/config/configWrapperNode');
const webpack = require('webpack');

module.exports = defineConfig({
  publicPath: finalConfig.BASE_URL,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true)
      })
    ]
  }
})
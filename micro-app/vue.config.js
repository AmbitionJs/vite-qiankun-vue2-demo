/*
 * @Author: Type the author's name
 * @Date: 2021-11-10 11:17:16
 * @LastEditTime: 2021-11-11 14:57:51
 * @LastEditors: huangjs
 * @Description: 
 */
const packageName = require('./package.json').name;

module.exports = {
  configureWebpack:{
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    devServer: {
      headers: {
        // 本地服务器接受跨域
        'Access-Control-Allow-Origin': '*',
      },
      port: 8999
    },
  }
}
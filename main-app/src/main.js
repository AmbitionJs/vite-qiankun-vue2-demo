/*
 * @Author: Type the author's name
 * @Date: 2021-11-10 10:59:45
 * @LastEditTime: 2021-11-11 13:59:35
 * @LastEditors: huangjs
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
registerMicroApps([
  {
    name: 'micro-app', // app name registered
    // entry: '//localhost:8080',
    entry: '//localhost:8999',
    container: '#app',
    activeRule: '/micro',
  },
]);

start();

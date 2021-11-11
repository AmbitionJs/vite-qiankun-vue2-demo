/*
 * @Author: Type the author's name
 * @Date: 2021-11-10 11:01:20
 * @LastEditTime: 2021-11-11 15:16:31
 * @LastEditors: huangjs
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import {
  renderWithQiankun,
  qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

function render(props = {
}) {
const {container} = props;
const mountPath = container ? container.querySelector('#app') : '#app';

window.sfopenpc = new Vue({
  render: (h) => h(App),
  }).$mount(mountPath);
}


// some code
renderWithQiankun({
  /**
   * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
   * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
   */
   bootstrap() {
    console.log('react app bootstraped');
  },
  
  /**
   * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  mount(props) {
    console.log('进入都会调用 mount11122');
    render(props);
  },
  
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
   */
  unmount() {
    console.log('切出/卸载');
  },
  
  /**
   * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
   */
  update(props) {
    console.log('update props', props);
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import AMap from 'vue-amap'

Vue.config.productionTip = false

Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'a333e15f5c979e23cd12963d2a0343c3',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0.11' // 版本号
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

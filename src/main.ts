// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
import { currency } from './currency'

import { Header, Cell, Checklist, PaletteButton, Button, Swipe, SwipeItem,Field,Actionsheet,Tabbar, TabItem,DatetimePicker,Picker } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)
Vue.component(Checklist.name, Checklist)
Vue.component(PaletteButton.name, PaletteButton)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Field.name, Field)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Picker.name, Picker)
// Vue.use(MintUI)

Vue.filter('currency', currency)

Vue.config.productionTip = false


/* tslint:disable no-unused-expression */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/* tslint:enable */

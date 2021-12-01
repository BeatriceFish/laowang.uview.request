import Vue from 'vue'
import App from './App'
import uView from '@/uni_modules/uview-ui'
import { postMenu, getMenu } from '@/config/api.js'
import store from '@/store';


Vue.config.productionTip = false
Vue.prototype.$postMenu = postMenu
Vue.prototype.$getMenu = getMenu
App.mpType = 'app'

// 引入全局uView
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);
Vue.use(uView)


// 将store放入Vue对象创建中
const app = new Vue({
	store,
	...App
})

// 引入请求封装，将app参数传递到配置中
require('./config/request.js')(app)

app.$mount()
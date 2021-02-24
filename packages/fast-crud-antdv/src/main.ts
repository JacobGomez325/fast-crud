import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FastCrud from '@fast-crud/fast-crud'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style/common.less'

import { requestForMock } from './api/service'
import './mock'
import icons from './icons'
// vue3的bug  npm link 时无法正常工作
const app = createApp(App)
app.use(Antd)
// app.use(ElementPlus, { size: 'small', zIndex: 3000, i18n: i18n.global.t })
app.use(router)
app.use(icons)
app.use(FastCrud, {
  async dictRequest ({ dict }) {
    const res = await requestForMock({ url: dict.url })
    console.log('get dict', res)
    return res
  },
  commonOptions () { return {} },
  ui: 'antdv'
})
app.mount('#app')
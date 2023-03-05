import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmartTable from 'vuejs-smart-table'


import './assets/main.css'

const app = createApp(App)

app.use(SmartTable)
app.use(router)


app.mount('#app')

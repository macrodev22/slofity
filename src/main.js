import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import router from './routes'
import App from './App.vue'

const pinia = createPinia()
pinia.use(({store}) => {
    store.$subscribe((mutation, state) => {
        localStorage.setItem('playlist', JSON.stringify(state))
    })
})

createApp(App)
.use(pinia)
.use(router)
.mount('#app')

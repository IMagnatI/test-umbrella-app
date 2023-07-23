import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import en from './translations/en'
import 'material-icons/iconfont/material-icons.css'
import './index.css'
import App from './App.vue'
import RateService from '@/stores/RateService'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: { ...en },
  },
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

//Initialize pinia stores
export const rateService = new RateService()

import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from './router'

import Page from './components/storyblok/Page.vue'
import ColunaMain from './components/storyblok/ColunaMain.vue'
import ColunaJogos from './components/storyblok/ColunaJogos.vue'
import CardJogo from './components/storyblok/CardJogo.vue'
import Conteudo from './components/storyblok/Conteudo.vue'
import Section from './components/storyblok/Section.vue'
import Nav from './components/storyblok/Nav.vue'
import Link from './components/storyblok/Link.vue'

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
app.use(StoryblokVue, {
  accessToken: 'LAPEP7BVUckZl6x2dLFFlAtt',
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
});

app.component("ColunaMain", ColunaMain)
app.component("ColunaJogos", ColunaJogos)
app.component("CardJogo", CardJogo)
app.component("Page", Page)
app.component("Conteudo", Conteudo)
app.component("Section", Section)
app.component("Nav", Nav)
app.component("Link", Link)

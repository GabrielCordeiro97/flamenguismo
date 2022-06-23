import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Noticias from "../components/Noticias.vue"
import Historia from "../components/Historia.vue";
import Equipe from "../components/Equipe.vue"
import Jogos from "../components/Jogos.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/noticias",
    name: "Noticias",
    component: Noticias,
  },
  {
    path: "/historia",
    name: "Historia",
    component: Historia,
  },
  {
    path: "/equipe",
    name: "Equipe",
    component: Equipe,
  },
  {
    path: "/jogos",
    name: "Jogos",
    component: Jogos,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
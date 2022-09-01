import { createRouter, createWebHistory } from "vue-router";
import TCount from '../Tcount.vue'
import VVote from '../votingList.vue'


const routes = [
  { path: '/', component: TCount },
  { path: '/vote', component: VVote },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
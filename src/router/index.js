import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const character = () => import("../views/character")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/news.vue")
  },
   {  
      path: '/character',
      name: 'character',
      component: character,
   },
   {  
      path: '/character/:id',
      name: 'character',
      component: character,
   }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import { createWebHistory, createRouter } from "vue-router";

import Index from '@/pages/Index.vue'

import ProductDetail from '@/pages/ProductDetail.vue'

import NewProduct from '@/pages/NewProduct.vue'

import BestProduct from '@/pages/BestProduct.vue'

import Event from '@/pages/Event.vue'

import Gift from '@/pages/Gift.vue'



const routes = [

  {

    path: "/shopji/",

    component: Index,

  },

  {

    path: "/shopji/ProductDetail=:id(\\d+)",

    component: ProductDetail,

  },

  {

    path: "/shopji/NewProduct",

    component: NewProduct,

  },

  {

    path: "/shopji/BestProduct",

    component: BestProduct,

  },

  {

    path: "/shopji/Event",

    component: Event,

  },

  {

    path: "/shopji/Gift",

    component: Gift,

  },

];



const router = createRouter({

  history: createWebHistory(),

  routes,

});



export default router;
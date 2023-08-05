import { createRouter, createWebHistory } from 'vue-router'

import index from './views/index.vue'
import contact from './views/contact.vue'
import about from './views/about.vue'
import portfolio from './views/portfolio.vue'




const routes = [
    {
        name: 'Grant L. McPherson',
        path: '/',
        component: index
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
        component:  portfolio
    },
    {
        name: 'About',
        path: '/about',
        component:  about
    },
    {
        name: 'Contact Me!',
        path: '/contact',
        component:  contact
    }
]
const history = createWebHistory();

const router = createRouter({
    history,
    routes
})

export default router
import { createRouter} from 'vue-router'

import index from './components/index.vue'
import contact from './components/contact.vue'
import about from './components/about.vue'
import portfolio from './components/portfolio.vue'





const routes = [
    {
        path: '/',
        component: index
    },
    {
        path: '/portfolio',
        component:  portfolio
    },
    {
        path: '/about',
        component:  about
    },
    {
        path: '/contact',
        component:  contact
    },
    

]

const router = createRouter({
    routes
})

export default router
import { createWebHistory, createRouter, } from "vue-router";
import Article from "./views/Article.vue"
import SavedNews from "./views/SavedNews.vue"
import Headlines from "./views/Headlines.vue"
import Settings from "./views/Settings.vue"

const routes = [
    { path: '/news/:id', name: 'article', component: Article },
    { path: '/saved', component: SavedNews },
    { path: '/headlines', component: Headlines },
    { path: '/settings', component: Settings },
    { path: '/', redirect: '/headlines' },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router

/*
router.beforeEach((to, from, next) => {
    if (to.path !== '/settings' && !isAuthenticated) next({ name: 'Login' })
    else next()
})*/

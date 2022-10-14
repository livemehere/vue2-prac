import Vue from "vue";
import App from './src/App.vue';
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import User from "@/pages/User.vue";
import Vuex from 'Vuex';


Vue.use(Vuex)
Vue.use(VueRouter);

const routes = [
    {path: '/', component:Home},
    {path: '/about', component:About},
    {path: '/user/:id', component:User},
]

const router = new VueRouter({
    routes
})

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(){
            store.state.count++
        }
    }
})


new Vue({
    render: h=> h(App),
    router,
    store
}).$mount('#app')


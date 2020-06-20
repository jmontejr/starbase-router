import Vue from 'vue';
import VueRouter from 'vue-router';
import Data from './components/Data.vue';

Vue.use(VueRouter)
const routes = [
    {
        path: '/data/:type',
        component: Data
    }
];

export default new VueRouter({
    routes
});
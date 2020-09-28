import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Theaters from './components/Theaters'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/cart'
// import Carrinho from './components/Carrinho' 

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/movies',
            name: 'movies',
            component: Movies,
        },
        {
            path:'/theater',
            name: 'theater',
            component: Theaters
        }, 
        {
            path:'/shows',
            name: 'shows',
            component: Shows
        }, 
        {
            path:'/register',
            name: 'register',
            component: Register
        }, 
        {
            path:'/login',
            name: 'login',
            component: Login
        }, 
        {
            path:'/cart',
            name: 'cart',
            component: Cart
        }
        
    ]
});
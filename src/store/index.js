// store/index.js

import Vue from "vue";
import Vuex from "vuex";
// eslint-disable-next-line no-unused-vars
import Item from "../App"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 0 e o titulo do filme\ 1 é o valor de cada ingresso\ 2 e o numero de ingressos do mesmo filme
        cart: [

        ]
    },
    getters: {},
    mutations: {
        addCart(state, movie) {
            // console.log(movie)
            if (state.cart.length != 0) {
                let bool = false
                for (var i = 0; i < state.cart.length; i++) {
                    //console.log("FOOOOOOI")
                    if (state.cart[i][0] == movie.titulo) {
                        console.log(movie.titulo)
                        // console.log("FOOOOOOI NO IF")
                        state.cart[i][2]++;
                        bool = true;
                    }


                }
                if(bool == false) {
                    // console.log("FOOOOOOI NO IF BOOL")
                    state.cart.push([movie.titulo,movie.valor , 1]);
                    //console.log("pqp")
                }
            } else {
                // console.log("FOOOOOOI NO ELSE")
                state.cart.push([movie.titulo, movie.valor, 1]);
                //console.log("pqp")
            }
        }

        
    },
    actions: {}
});

// if (state.cart.length != 0) {
//     let bool = false
//     for (var i = 0; i < state.cart.length; i++) {
//         //console.log("FOOOOOOI")
//         if (state.cart[i].titulo == movie.titulo) {
//             console.log(movie.titulo)
//             // console.log("FOOOOOOI NO IF")
//             state.cart[i].quantidade++;
//             bool = true;
//         }


//     }
//     if(bool == false) {
//         state.cartItem.titulo = movie.titulo
//         console.log(movie.titulo)
//         state.cartItem.quantidade = 1
//         // console.log("FOOOOOOI NO IF BOOL")
//         state.cart.push(state.cartItem);
//         let count = 0
//         if(state.cartItem!=null){
//             for(var j = 0; j<state.cartItem.length; j++) {
//                 count++;
//             }
//         }
//         console.log(count)
//         //console.log("pqp")
//         console.log(state.cart)
//     }
// } else {
//     state.cartItem.titulo = movie.titulo
//     console.log(movie.titulo)
//         state.cartItem.quantidade = 1
//     // console.log("FOOOOOOI NO ELSE")
//     state.cart.push(state.cartItem);
//     console.log(state.cart)
//     //console.log("pqp")
// }
// }
// },
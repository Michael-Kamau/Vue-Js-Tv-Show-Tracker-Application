import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showsNew: [],
        show: [],
        showsAdd: [],
        cart: [],
        checkoutStatus: null,

    },

    getters: {
        getAllShows(state) {
            return state.show
        },


    },

    actions: {
        getShowsData(state) {

            state.commit('getShowsData')
        },
        postShow({commit}, payload) {
            console.log("reached");
            commit('postShow', payload)
        },
    },

    mutations: {
        pushShowToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },

        getShowsData(state) {
            axios.get('http://localhost:5000/shows')
                .then(response => {
                    state.show = response.data.shows
                }).catch(e => {
                console.log(e)
            })
        },
        postShow(state,payload) {
            axios.post(`http://localhost:5000/addShow`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show=response.data.shows
                }).catch(e => {
                    //this.errors.push(e)
                console.log(e)
                })
        },

    }
})

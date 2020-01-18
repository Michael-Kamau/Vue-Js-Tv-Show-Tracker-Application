import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: [],
        authenticationToken:null,
        authenticated:false,
        showsNew: [],
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
        deleteShow({commit}, payload) {
            console.log("delete reached action");
            commit('deleteShow', payload)
        },
    },

    mutations: {

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
        deleteShow(state,payload) {
            axios.post(`http://localhost:5000/delete`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show=response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        },
        login(state, payload) {
            axios.post(`http://localhost:5000/login`, payload)
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

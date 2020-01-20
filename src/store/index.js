import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: [],
        token:localStorage.getItem('access_token')||null,
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

        loggedIn(state){
            return state.token!=null
        }


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
        retrieveToken(state,payload){
            return new Promise((resolve,reject)=>{
                axios.post(`http://64.227.11.157/api/login`, payload)
                    .then(response => {
                        console.log(response.data)
                        const token=response.data.token
                        localStorage.setItem('access_token',token)
                        state.commit('retrieveToken',token)
                        resolve(response)
                    }).catch(e => {
                        reject(e)

                    //this.errors.push(e)
                    console.log(e)
                })
            })


        },

        loggedIn(state){
            return state.token!=null
        },
        destroyToken(state){
           if(state.getters.loggedIn){
               return new Promise((resolve,reject)=>{
                   axios.post(`http://localhost:5000/api/logout`)
                       .then(response => {
                           localStorage.removeItem('access_token')
                           state.commit('destroyToken')
                           resolve(response)
                       }).catch(e => {
                       localStorage.removeItem('access_token')
                       state.commit('destroyToken')
                       reject(e)

                       //this.errors.push(e)
                       console.log(e)
                   })
               })


           }
        },
        subscribe(state,payload){
            axios.post(`http://64.227.11.157/subscribe`, payload)
                .then(response => {
                    console.log(response.data)
                    //this.state.show=response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        }
    },

    mutations: {

        getShowsData(state) {
            axios.get('http://64.227.11.157/shows')
                .then(response => {
                    state.show = response.data.shows
                }).catch(e => {
                console.log(e)
            })
        },
        postShow(state,payload) {
            axios.post(`http://64.227.11.157/addShow`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show=response.data.shows
                }).catch(e => {
                    //this.errors.push(e)
                console.log(e)
                })
        },
        deleteShow(state,payload) {
            axios.post(`http://64.227.11.157/delete`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show=response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        },

        retrieveToken(state,payload){
            state.token=payload
        },
        destroyToken(state){
            state.token=null
        },
        login(state, payload) {
            axios.post(`http://64.227.11.157/login`, payload)
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

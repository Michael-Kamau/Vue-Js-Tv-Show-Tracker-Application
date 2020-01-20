import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        show: [],
        token: localStorage.getItem('access_token') || null,
        authenticated: false,
        subscribers: [],
    },

    getters: {
        getAllShows(state) {
            return state.show
        },

        loggedIn(state) {
            return state.token != null
        },
        getSubscribers(state) {
            return state.subscribers
        }


    },

    actions: {
        getShowsData(state) {

            state.commit('getShowsData')
        },
        getAllSubscribers(state) {
            axios.get(`http://localhost:5000/subscribers`)
                .then(response => {
                    console.log(response.data)
                    const subscribers = response.data.subscribers
                    state.commit('getAllSubscribers', subscribers)
                    resolve(response)
                }).catch(e => {
                console.log(e)
            })


        },
        postShow({commit}, payload) {
            console.log("reached");
            commit('postShow', payload)
        },
        deleteShow({commit}, payload) {
            console.log("delete reached action");
            commit('deleteShow', payload)
        },
        retrieveToken(state, payload) {
            return new Promise((resolve, reject) => {
                axios.post(`http://localhost:5000/api/login`, payload)
                    .then(response => {
                        console.log(response.data)
                        const token = response.data.token
                        localStorage.setItem('access_token', token)
                        state.commit('retrieveToken', token)
                        resolve(response)
                    }).catch(e => {
                    reject(e)

                    //this.errors.push(e)
                    console.log(e)
                })
            })


        },

        loggedIn(state) {
            return state.token != null
        },
        destroyToken(state) {
            if (state.getters.loggedIn) {
                return new Promise((resolve, reject) => {
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
        subscribe(state, payload) {
            axios.post(`http://localhost:5000/subscribe`, payload)
                .then(response => {
                    console.log(response.data)
                    //this.state.show=response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        },
        adminUnsubscribe(state,payload) {
            console.log(payload)
            axios.post(`http://localhost:5000/adminUnsubscribe`,payload)
                .then(response => {
                    console.log(response.data)
                    const subscribers = response.data.subscribers
                    state.commit('adminUnsubscribe', subscribers)
                }).catch(e => {
                console.log(e)
            })


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
        getAllSubscribers(state,payload) {
            state.subscribers=payload
        },
        postShow(state, payload) {
            axios.post(`http://localhost:5000/addShow`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show = response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        },
        deleteShow(state, payload) {
            axios.post(`http://localhost:5000/delete`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show = response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        },

        retrieveToken(state, payload) {
            state.token = payload
        },
        destroyToken(state) {
            state.token = null
        },
        login(state, payload) {
            axios.post(`http://localhost:5000/login`, payload)
                .then(response => {
                    console.log(response.data)
                    this.state.show = response.data.shows
                }).catch(e => {
                //this.errors.push(e)
                console.log(e)
            })
        },
        adminUnsubscribe(state, payload){
            console.log(payload)
            state.subscribers= payload
        }

    }
})

import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showsNew: [],
      shows:[
          {'name':"welcome To Dalas","category":"Action","year":2019},
          {'name':"Texas Reladed","category":"Action","year":2019},
          {'name':"Nakuru Mashup","category":"Documentary","year":2019},
          {'name':"Kimberly Jones","category":"Romance","year":2019},
      ],
      showsAdd:[],
      cart:[],
      checkoutStatus:null,

  },

  getters: {
      getAllShows(state){
          return state.shows
      },
      getShowsData(state){
           axios.get('http://localhost:5000/shows')
               .then(response=>{
                   state.shows=response.data
               }).catch(e=>{
                   console.log(e)
           })
      },


    },


    actions: {
  },

  mutations: {
    pushShowToCart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },

  }
})

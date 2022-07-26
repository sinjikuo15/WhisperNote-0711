import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    loginStatus: 0
  },
  getters: {
  },
  mutations: {
    updateLoginStatus(state, payload){
      console.log('updateLoginStatus run!');
      state.loginStatus = payload
      console.log("updateLoginStatus",state.loginStatus)
    },
  },
  actions: {
    getLoginStatus(context){
      axios.get('/loginStatus')
          .then((response) => {
            console.log(response.data.loginStatus)
            let payload = response.data.loginStatus
            context.commit('updateLoginStatus', payload)
          })
          .catch((err)=>{
            console.log(err);
          })
    },
  },
  modules: {
  }
})

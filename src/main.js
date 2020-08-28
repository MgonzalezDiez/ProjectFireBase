import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app
firebase.auth().onAuthStateChanged(() => { //Esto es para que no se borre la sesión de usuario si es que hay un refresh
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')    
  }
})


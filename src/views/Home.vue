<template>
  <div class="home container">
    <form @submit.prevent="login">
      <div class="form-group">
        <label >Email</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie.</small>
      </div>
      <div class="form-group">
        <label >Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>

import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    email: '',
    password: ''
    }
  },
  components: {
    
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.setUser({
          email: this.email
        })
        this.$router.push('/admin')
      }).catch(() => {
        alert('No No Noooo')
      })
    }
  }
}
</script>

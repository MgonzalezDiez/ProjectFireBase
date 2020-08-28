º<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <div id="navbarNav" class="ml-auto">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link> 
            
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
          <li v-if="currentUser">
            <a href="#" class="nav-link" @click.prevent="logout">LogOut</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {

  methods: {  // Se gatillan con alguna acción, por ejemplo, un click
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
        this.setUser(undefined)
      })
    }
  }, 
  computed:{  //Se calculan en base a los parámetros que se entregan
  ...mapState(['currentUser'])
  }

}
</script>

<style>

</style>
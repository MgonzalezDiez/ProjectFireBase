<template>
  <div>
    <h1>Esta es la página de Admin</h1>
    <hr>
    <h2>Bienvenido {{ currentUser.email }}</h2>
    <ul>
      <li v-for="beer in beers" :key="beer.id">
        {{ beer.data.name }} 
        <img :src="beer.data.picture"/>
        <router-link :to='{name: "Beer", params: {id: beer.id}}'>Pincha aquí</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'beers'])
  },
  methods: {
    ...mapActions(['setBeers'])
  },
  created() {
    this.setBeers() 
  }
}
</script>

<style>

</style>
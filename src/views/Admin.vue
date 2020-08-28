<template>
  <div>
    <h1>Esta es la página de Admin</h1>
    <hr>
    <h2>Bienvenido {{ currentUser.email }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style>

</style>
<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'

export default {
  components: {
    Navbar
  }
}
</script>
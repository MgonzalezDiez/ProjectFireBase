<template>
  <div>
    <h1>Página de las cervezas</h1>
    {{ beer }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  created() {
    this.setBeer(this.$route.params.id)
  },
  computed:{
    ...mapState(['beer'])
  },
  methods:{
    ...mapActions(['setBeer'])
  }

}
</script>

<style>

</style>
<template>
  <div>
    <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="post-heading" mt-5>
                        <h1><strong>La página que busca no existe</strong></h1>
                        <button @click="home">Volver al inicio</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>
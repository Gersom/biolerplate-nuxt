<template lang="pug">
  .Layout-defult
    .o-container
      Header
      nuxt
      Footer
</template>

<script>

import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default {
  components: {
    Footer, Header
  }
}

</script>

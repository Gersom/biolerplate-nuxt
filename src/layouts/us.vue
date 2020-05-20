<template lang='pug'>
  .LayoutUs
    .o-container
      Header(:title="textHeader")
      nuxt
      Footer
</template>

<script>

import Footer from '~/components/Footer'
import Header from '~/components/Header'

export default {
  components: {
    Footer, Header
  },
  data () {
    return {
      textHeader: 'Navbar Us'
    }
  }
}

</script>

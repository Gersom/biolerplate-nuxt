<template lang="pug">

  .container
    h1 Contact
    Button(text="Inicio")

</template>

<script>

import Button from '~/components/Button.vue'
import Head from '~/record/heads/contact'

export default {
  components: {
    Button
  },
  head: { ...Head }
}

</script>

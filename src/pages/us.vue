<template lang="pug">

  .container
    h1 US
    Button(text="Inicio")

</template>

<script>

import Button from '~/components/Button.vue'

export default {
  layout: 'us',
  components: {
    Button
  }
}

</script>

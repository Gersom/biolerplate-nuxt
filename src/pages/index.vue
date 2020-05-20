<template lang="pug">
  div
    logo
    h1.title Boilerplate-nuxt
    h2.subtitle My geometric Nuxt.js project

    .links
      Button(
        :link="{ name: 'Us' }"
        text="Nosotros"
      )
      Button(
        :link="{ name: 'Contact' }"
        text="Contacto"
      )
      Button(
        :link="{ path: '/404' }"
        text="404"
      )
</template>

<script>
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button.vue'

export default {
  components: {
    Logo, Button
  }
}
</script>

<style>
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

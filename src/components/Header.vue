<template lang='pug'>
  .c-header
    nav
      h2 {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Navbar Principal'
    }
  }
}
</script>

<style lang="stylus">
  .c-header
    text-align: center
</style>

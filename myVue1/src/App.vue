<template>
  <div id="app">
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    'Nav': Nav
  }
}
</script>

<style>
/* https://api.coindesk.com/v1/bpi/currentprice.json */
</style>

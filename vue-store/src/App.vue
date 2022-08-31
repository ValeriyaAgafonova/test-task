<template>
  <div id="App">
    <store-header/>
  </div>

</template>

<script>
import storeHeader from './components/store-header.vue'

export default {
  name: 'App',
  components: {
   storeHeader,
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  
}
</style>

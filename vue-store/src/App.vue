<template>
  <div id="App">
    <store-header/>
    <store-catalog/>
  </div>

</template>

<script>
import storeHeader from './components/v-store-header.vue'
import storeCatalog from './components/v-store-catalog.vue'
export default {
  name: 'App',
  components: {
   storeHeader,
   storeCatalog
  }
}
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: Inter;
  src: url(./assets/fonts/Inter-Regular.ttf);
  font-weight: 400;
}
body {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 0;
  font-family: "Inter";
}
a {
  text-decoration: none;
  color: black;
}
p {
  margin: 0;
}
h1,
h2 {
  margin: 0;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
button {
  cursor: pointer;
}
</style>

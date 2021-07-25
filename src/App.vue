<template>
  <NewComponent msg="Some great text" />
</template>

<script>
import NewComponent from './components/NewComponent.vue';

export default {
  name: 'App',
  components: {
    NewComponent,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

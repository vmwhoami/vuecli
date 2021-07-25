<template>
  <div class="container">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  props: {
    msg: String,
  },
};
</script>

<style  scoped>
.container {
  background-color: blue;
}
h2 {
  margin: 0;
}
</style>

<template>
   <footer>{{info}}</footer>
</template>

<script>
export default {
  data() {
    return {
      info: new Date().getFullYear(),
    };
  },
};
</script>

<style  scoped>
h2 {
  margin: 0;
}
</style>

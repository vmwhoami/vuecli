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
footer{
  background: rgb(24, 24, 24);
  color: white;
}
</style>

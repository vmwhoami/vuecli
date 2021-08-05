<template>
   <footer>
     <div>
       <span>
      &#169; {{  author }} 2020-{{currentYear}}
     </span>
     </div>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      author: 'vmwhoami',
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style  scoped>
footer{
  height: 100px;
  display: flex;
  align-items: center;
justify-content: center;
  background: rgb(24, 24, 24);
  color: white;
}
span{
text-transform: uppercase;
}
</style>

<template>
  <div>
    Home Page
    <button @click="handleClick">increment</button>
  </div>
</template>

<script>
  export default {
    name:'Home',
    methods:{
      handleClick(){
        this.$store.commit('increment');
      }
    }
  }
</script>
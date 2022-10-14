<template>
  <div>user page</div>
</template>

<script>
export default {
  name: 'User',
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

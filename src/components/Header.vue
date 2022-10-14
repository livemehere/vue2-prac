<template>
  <div header>
    <router-link :key="l.name" v-for="l in list" :to="l.path" exact>{{ l.name }}</router-link>
  </div>
</template>

<script>
export default {
  props: ['list'],
};
</script>

<style scoped>
[header] {
  display: flex;
  gap: 10px;
}
</style>

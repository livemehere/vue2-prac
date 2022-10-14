<template>
  <div>
    <h1>App Component! {{ $store.state.count }}</h1>
    <input type="text" v-model="userId" />
    <Header :list="routeList"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      userId: 1,
    };
  },
  computed: {
    routeList() {
      return [
        { path: '/', name: 'home' },
        { path: '/about', name: 'about' },
        { path: `/user/${this.userId}`, name: `/user/${this.userId}` },
      ];
    },
  },
};
</script>

<style>
[myfooter] .hi {
  background-color: #333;
  color: #fff;
}
</style>

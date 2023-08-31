<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
import BgAnimation from './components/BgAnimation/BgAnimation.vue';
import Login from '../src/views/Login.vue';
export default {
  components: { BgAnimation, Login },
  name: "App"
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>

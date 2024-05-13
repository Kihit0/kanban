<template>
  <div class="app w-screen">
    <Icons />
    <div class="app-wrapper rounded-8 w-full">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Icons from './components/ux/Icons/icons.vue';
export default {
  components: {
    Icons
  }
}
</script>

<style scoped>
.app {
  background-color: var(--bg-color-main);
  height: 100vh;
  overflow: hidden;
}

.app-wrapper {
  height: 100%;
}
</style>

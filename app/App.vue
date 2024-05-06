<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="app w-screen p-8">
    <div class="app-wrapper rounded-8 w-full">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: var(--bg-color-main);
  height: 100vh;
  overflow: hidden;
}

.app-wrapper{
  height: 100%;
}
</style>

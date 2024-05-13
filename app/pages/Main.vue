<template>
  <div class="app-main flex">
    <div class="app-main__Sidebar">
      <Sidebar />
    </div>
    <div class="app-main__content">
      <div class="app-main__content-bar">
        Bar
      </div>
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Sidebar from '../components/ux/Sidebar/Sidebar.vue';

export default {
  components: {
    Sidebar,
    RouterView
  },
  setup() {

  }
}
</script>

<style scoped>
.app-main {
  height: 100%;
}

.app-main__Sidebar {
  width: 15%;
}
</style>
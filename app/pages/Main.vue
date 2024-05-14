<template>
  <div class="app-main flex">
    <div class="app-main__sidebar">
      <Sidebar />
    </div>
    <div class="app-main__content w-full">
      <div class="app-main__content-navigation">
        <Navigation />
      </div>
      <div class="app-main__content-dynamic p-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Sidebar from '../components/ux/Sidebar/Sidebar.vue';
import Navigation from "../components/ux/Navigation/Navigation.vue";

export default {
  components: {
    Sidebar,
    RouterView,
    Navigation
  },
}
</script>

<style scoped>
.app-main {
  height: 100%;
}

.app-main__sidebar {
  width: 15%;
}

.app-main__content {
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
}

.app-main__content-dynamic {
  border: 1px solid #e2e4eb;
  background-color: var(--bg-color-main);
  height: calc(100% - 3.25rem);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>
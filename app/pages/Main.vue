<template>
  <div class="app-main flex">
    <div class="app-main__navigation">
      <Navigation />
    </div>
    <div class="app-main__content">
        <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navigation from '../components/ux/Navigation/Navigation.vue';

export default {
  components: {
    Navigation,
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

.app-main__navigation{
  width: 15%;
}

</style>
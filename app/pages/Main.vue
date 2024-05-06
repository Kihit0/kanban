<template>
  <div class="app-main flex">
    <div class="app-main__navigation px-8">
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from '../components/ux/Navigation/Navigation.vue';

export default {
  components: {
    Navigation
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
  width: 20%;
}

</style>
<template>
  <div class="navigation w-full">

  </div>
</template>

<script>
  export default {
    methods: {
      getNavigateItems(){
        const mainPath = this.$router.options.routes.filter(el => el.name === 'Main')[0];
        return mainPath;
      }
    }
  }
</script>

<style scoped>
  .navigation{
    height: 100%;
  }
</style>
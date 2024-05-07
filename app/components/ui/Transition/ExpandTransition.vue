<template>
  <Transition name="expand">
    <slot></slot>
  </Transition>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.5s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>
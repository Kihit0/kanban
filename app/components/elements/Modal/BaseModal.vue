<template>
  <div class="base-modal w-screen cursor-pointer" @click.self="close()">
    <div class="base-modal__wrapper cursor-default" :class="isContainsPosition()">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      required: true,
    },
    position: {
      type: String,
      default: "center"
    }
  },
  methods: {
    isContainsPosition() {
      const position = ["right", "left", "center"];

      if (~position.indexOf(this.position)) {
        return this.position;
      }

      return "center";
    }
  }
}
</script>

<style scoped>
.base-modal {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #0000004a;
  overflow: hidden;
}

.base-modal__wrapper {
  position: absolute;
  z-index: 9999;
}

.base-modal__wrapper.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.base-modal__wrapper.right {
  top: 0;
  right: 0;
  height: 100%;
}

.base-modal__wrapper.left {
  top: 0;
  left: 0;
  height: 100%;
}
</style>
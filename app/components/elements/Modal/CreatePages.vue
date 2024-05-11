<template>
  <FadeTransition>
    <div v-show="isOpen">
      <BaseModal :close="() => closeModal()">
        <div class="create-pages rounded-8 p-8">Create New</div>
      </BaseModal>
    </div>
  </FadeTransition>
</template>

<script>
import FadeTransition from "../../ui/Transition/FadeTransition.vue";
import BaseModal from "./BaseModal.vue";

export default {
  components: {
    FadeTransition,
    BaseModal
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
    closeModal: {
      type: Function,
      required: true,
    }
  }
}
</script>

<style scoped>
.create-pages{
  width: 300px;
  height: 300px;
  background-color: #fff;
}
</style>
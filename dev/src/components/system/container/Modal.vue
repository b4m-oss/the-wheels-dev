<script lang="ts" setup>
const props = defineProps<{
  modalId: string | undefined;
  modalTitle: string | undefined;
}>();
</script>

<template>
  <dialog class="twls-modal" :id="props.modalId" :title="props.modalTitle">
    <header class="modal-header" id="sample-modal-title">
      {{ props.modalTitle }}
    </header>
    <section class="modal-content" id="sample-modal-content">
      <slot name="modal-content" />
    </section>
    <footer class="modal-footer">
      <slot name="modal-footer" />
    </footer>
  </dialog>
  <slot name="modal-initiater" />
</template>

<style></style>

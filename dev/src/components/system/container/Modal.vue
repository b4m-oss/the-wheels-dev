<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps<{
  modalId: string | undefined;
  modalTitle: string | undefined;
}>();

// TODO: もうちょっとソースを綺麗にしたい

const modalDialog = ref<HTMLDialogElement>();
const slotContainer = ref<HTMLElement | null>(null); // スロット要素を保持
const slotFooter = ref<HTMLElement | null>(null); // スロット要素を保持

const openModal = () => {
  modalDialog.value?.showModal();
};

const closeModal = () => {
  modalDialog.value?.close();
};

onMounted(() => {
  if (slotContainer.value) {
    // スロット内のすべての子要素を取得
    const childElements =
      slotContainer.value.querySelectorAll(".twls-modal-opener");

    console.log(childElements);

    // 特定の条件に合う要素（例: ボタン）を探す
    childElements.forEach((el) => {
      if (el instanceof HTMLButtonElement) {
        el.addEventListener("click", openModal);
      }
    });
  }

  if (slotFooter.value) {
    const childElements =
      slotFooter.value.querySelectorAll(".twls-modal-closer");

    // 特定の条件に合う要素（例: ボタン）を探す
    childElements.forEach((el) => {
      if (el instanceof HTMLButtonElement) {
        el.addEventListener("click", closeModal);
      }
    });
  }
});
</script>

<template>
  <dialog
    class="twls-modal"
    ref="modalDialog"
    :id="props.modalId"
    :title="props.modalTitle"
  >
    <header class="modal-header" id="sample-modal-title">
      {{ props.modalTitle }}
    </header>
    <section class="modal-content" id="sample-modal-content">
      <div class="twls-content">
        <slot name="modal-content"></slot>
      </div>
    </section>
    <footer ref="slotFooter" class="modal-footer">
      <slot name="modal-footer"></slot>
    </footer>
  </dialog>
  <div ref="slotContainer">
    <slot name="modal-initiater"></slot>
  </div>
</template>

<style></style>

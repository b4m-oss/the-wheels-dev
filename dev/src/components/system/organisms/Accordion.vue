<script lang="ts" setup>
const props = defineProps<{
  tabLabel: string | HTMLElement;
}>();
</script>

<template>
  <details class="accordion-item">
    <summary class="accordion-tab">{{ props.tabLabel }}</summary>
    <div class="accordion-detail">
      <slot />
    </div>
  </details>
</template>

<style></style>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="parts-gallery-item">
    <dt class="title">{{ title }}</dt>
    <dd>
      <slot />
    </dd>
  </div>
</template>

<style></style>

<script setup lang="ts">
const props = defineProps<{
  required: boolean;
}>()
</script>
<template>
  <label class="twls-select-element">
    <input type="checkbox" name="contact-agree-policy" :required="props.required">
    <span class="twls-label-text" data-required-label="必須">
      <slot />
    </span>
  </label>
</template>
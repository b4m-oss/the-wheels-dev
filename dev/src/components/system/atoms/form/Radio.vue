<script setup lang="ts">
const props = defineProps<{
  name: string;
  required: boolean;
  value: string;
}>()
</script>
<template>
  <label class="twls-selective-element">
    <input type="radio" :name="props.name" :value="props.value" :required="props.required">
    <span class="twls-label-text">
      <slot />
    </span>
  </label>
</template>
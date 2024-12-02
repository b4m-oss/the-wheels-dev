<script lang="ts" setup>
const props = defineProps<{
  label: string;
  name: string;
  isChecked: boolean | undefined;
}>();
</script>

<template>
  <label class="radio-group-item">
    <input type="radio" :name="props.name" :checked="props.isChecked" />
    <span>{{ label }}</span>
  </label>
</template>

<style></style>

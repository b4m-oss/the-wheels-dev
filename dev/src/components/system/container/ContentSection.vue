<script lang="ts" setup>
const props = defineProps<{
  title: string;
  id: string | null;
}>();
</script>

<template>
  <section class="twls-content">
    <h2 class="twls-h2">{{ props.title }}</h2>
    <slot />
  </section>
</template>

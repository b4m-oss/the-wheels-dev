<script lang="ts" setup>
const props = defineProps<{
  titleTag: string;
  title: string;
  id: string | null;
}>();

const markup = `<${props.titleTag} ${props.id ? `id=${props.id}` : ""}>${props.title}</${props.titleTag}>`;
</script>

<template>
  <section class="twls-content-container">
    <span v-html="markup"></span>
    <slot />
  </section>
</template>

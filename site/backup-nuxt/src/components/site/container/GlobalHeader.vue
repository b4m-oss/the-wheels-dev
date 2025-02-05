<script lang="ts" setup>
const props = defineProps<{
  title: string;
  caption: string | null;
}>();
</script>

<template>
  <div class="twls-container">
    <div class="global-header">
      <p class="title">
        <NuxtLink to="/">{{ props.title }}</NuxtLink>
      </p>
      <template v-if="props.caption">
        <p class="caption">{{ props.caption }}</p>
      </template>
    </div>
    <!-- <SubpageNavigation /> -->
  </div>
</template>

<style></style>

<script lang="ts" setup>
const props = defineProps<{
  htmlClass: string;
}>()
</script>

<template>
  <div :class="props.htmlClass ? 'twls-message-panel ' + props.htmlClass : 'twls-message-panel'">
    <header class="twls-message-panel_header">
      <slot name="header"></slot>
    </header>
    <div class="twls-message-panel_content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
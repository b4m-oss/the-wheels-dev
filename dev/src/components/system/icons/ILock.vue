<script lang="ts" setup>

const props = defineProps<{
  width: string;
  height: string;
  fill: string;
  rotate: string;
}>()

</script>

<template>
  <svg :width="props.width" :height="props.height" viewBox="0 0 65 87" fill="none" xmlns="http://www.w3.org/2000/svg" :style="props.rotate ? 'transform: rotate(' + props.rotate + 'deg)' : ''">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 32.625V21.75C10.8333 9.7378 20.5338 0 32.5 0C44.466 0 54.1667 9.7378 54.1667 21.75V32.625H65V87H0V32.625H10.8333ZM21.6667 21.75C21.6667 15.7439 26.5169 10.875 32.5 10.875C38.4831 10.875 43.3333 15.7439 43.3333 21.75V32.625H21.6667V21.75ZM27.0833 70.6875V48.9375H37.9167V70.6875H27.0833Z" :fill="props.fill"/>
  </svg>
</template>

<style lang="scss" scoped>
  svg {
    aspect-ratio: 65/87;
  }
</style>
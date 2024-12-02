<script lang="ts" setup>
const props = defineProps<{
  label: string | HTMLElement;
  type: "button" | "submit" | "reset" | string | undefined;
  class: string | null;
  isFull: boolean | null;
  isDisabled: boolean | undefined;
  dataAttributes:
    | {
        [key: string]: string;
      }
    | null
    | undefined;
}>();

let dataAttributes: any = null;
if (props.dataAttributes) {
  dataAttributes = Object.fromEntries(
    Object.entries(props.dataAttributes).filter(([key]) =>
      key.startsWith("data-"),
    ),
  );
}
</script>

<template>
  <button
    :type="props.type as 'button' | 'submit' | 'reset' | undefined"
    :class="
      'twls-button ' +
      (props.class ? props.class : '') +
      (props.isFull ? ' full' : '')
    "
    :disabled="props.isDisabled"
    :data-attributes="dataAttributes"
  >
    {{ props.label }}
  </button>
</template>

<style></style>

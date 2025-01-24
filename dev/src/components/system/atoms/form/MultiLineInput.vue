<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps<{
  label: string;
  minlength: number;
  maxlength: number;
  required: boolean;
  name: string;
  rows: number;
  placeholder: string;
  initialValue: string;
}>()

const text = ref('')
text.value = props.initialValue
const textCount = computed(() => text.value.length)
</script>

<template>
  <label class="twls-input">
    <span class="twls-label-text">{{ props.label }}</span>
    <textarea :rows="props.rows" :name="props.name" :minlength="props.minlength" :maxlength="props.maxlength" :required="props.required" :placeholder="props.placeholder" ref="textarea" v-model="text">
      {{ text }}
    </textarea>
    <span class="twls-text-counter" v-if="props.maxlength || props.minlength">{{ textCount }}/{{ props.maxlength }}</span>
  </label>
</template>
<script lang="ts" setup>
const props = defineProps<{
  href: string;
  title: string;
  caption: string | null;
  ctaLabel: string | null;
}>();
</script>

<template>
  <a class="twls-card-button" :href="props.href">
    <div class="label">
      <p>
        <b>{{ props.title }}</b>
      </p>
      <template v-if="caption">
        <p class="caption">{{ props.caption }}</p>
      </template>
    </div>
    <footer>
      <p>{{ props.ctaLabel || "詳細へ" }}</p>
      <!-- <span class="nav-icon">
      <include
      src="components/systems/icons/direction/arrow.svg"
      locals='{"width": 18, "height": 8, "fill": "var(--text-main)"}'
    > 
          </include>
          </span>
      -->
    </footer>
  </a>
</template>

<script lang="ts" setup>
import GlobalHeader from "~/components/site/container/GlobalHeader.vue";
import GlobalFooter from "~/components/site/container/GlobalFooter.vue";
</script>
<template>
  <header>
    <GlobalHeader title="The Wheels" caption="All purpose design system." />
  </header>
  <main id="main">
    <div class="layout-container">
      <slot />
    </div>
  </main>
  <footer>
    <GlobalFooter />
  </footer>
</template>

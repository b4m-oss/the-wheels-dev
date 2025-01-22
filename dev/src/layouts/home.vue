<script lang="ts" setup>
import GlobalFooter from "~/components/site/container/GlobalFooter.vue";
</script>

<template>
  <div class="twls-body">
    <header>
      <!-- <GlobalHeader title="The Wheels" caption="All purpose design system." /> -->
    </header>
    <main id="main">
      <div class="layout-container">
        <slot />
      </div>
    </main>
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>

<style></style>

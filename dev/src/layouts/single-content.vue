<script lang="ts" setup>
import GlobalHeader from "~/components/site/container/GlobalHeader.vue";
import GlobalFooter from "~/components/site/container/GlobalFooter.vue";
import SubpageNavigation from "~/components/site/elements/SubpageNavigation.vue";
</script>
<template>
  <div class="twls-body">
    <header>
      <GlobalHeader title="The Wheels" caption="All purpose design system." />
    </header>
    <main id="main">
      <div class="layout-container">
        <SubpageNavigation />
        <slot />
      </div>
    </main>
    <footer>
      <GlobalFooter />
    </footer>
  </div>
</template>

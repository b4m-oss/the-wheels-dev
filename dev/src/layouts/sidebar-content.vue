<script lang="ts" setup>
import GlobalHeader from "~/components/site/container/GlobalHeader.vue";
import GlobalFooter from "~/components/site/container/GlobalFooter.vue";
import SubpageNavigation from "~/components/site/elements/SubpageNavigation.vue";
</script>
<template>
  <header>
    <GlobalHeader title="The Wheels" caption="All purpose design system." />
  </header>
  <section class="main">
    <div class="twls-container">
      <slot name="pageTitle" />
      <SubpageNavigation />
      <div class="twls-layout-sidebar">
        <div class="twls-sidebar">
          <slot name="sidebar" />
        </div>
        <main class="twls-main-content">
          <slot name="content" />
        </main>
      </div>
    </div>
  </section>
  <footer>
    <GlobalFooter />
  </footer>
</template>

<style>
/* TODO: 後で、SCSS本体に移植する */
.twls-main-content {
  width: 72rem;
}
@media (width < 1280px) {
  .twls-sidebar {
    /* 一時的に非表示。 */
    display: none;
  }
  .twls-layout-sidebar {
    flex-flow: column;
  }
  .twls-main-content {
    max-width: 72rem;
    width: 100%;
    padding: 0;
  }
}
</style>

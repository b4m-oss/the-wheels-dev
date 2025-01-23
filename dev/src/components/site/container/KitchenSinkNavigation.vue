<script lang="ts" setup></script>

<template>
  <nav class="twls-sidemenu kitchen-sink-sidemenu">
    <section class="twls-sidemenu-container">
      <h2 class="twls-sidemenu-heading">Component</h2>
      <ul class="twls-sidemnu-list">
        <li class="twls-sidemenu-item"><a href="#button">Button</a></li>
        <li class="twls-sidemenu-item">
          <a href="#radio-group">RadioGroup</a>
        </li>
        <li class="twls-sidemenu-item"><a href="#accordion">Accordion</a></li>
        <li class="twls-sidemenu-item"><a href="#modal">Modal</a></li>
        <li class="twls-sidemenu-item"><a href="#message-panel">Message Panel</a></li>
      </ul>
    </section>
  </nav>
</template>

<style>
.kitchen-sink-sidemenu {
  position: sticky;
  top: 1.5rem;
  [class*="sidemenu-heading"] {
    margin-top: 0.5em; /* メインコンテンツ見出しとのツラ合わせ微調整 */
    font-size: 1.5rem;
    margin-bottom: 1.2em;
  }
  [class*="sidemenu-item"] {
    font-size: 1.4rem;
    margin-bottom: 1em;
    margin-left: 0.75em;
  }
}
</style>

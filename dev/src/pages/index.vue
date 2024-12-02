<script lang="ts" setup>
import Hero from "~/components/site/container/Hero.vue";
import CardButton from "~/components/system/container/CardButton.vue";
import { navigationData } from "~/constants/navigation";
</script>

<template>
  <div>
    <NuxtLayout name="home">
      <Hero />
      <nav class="twls-container horizontal">
        <a href="/kitchen-sink/" class="twls-button">Kitchen sink</a>
      </nav>
      <nav>
        <template
          v-for="(item, index) in navigationData"
          :key="'navItem-' + index"
        >
          <section class="twls-index-nav-container">
            <h2 class="heading">{{ item.category }}</h2>
            <div class="twls-index-nav-list">
              <template
                v-for="(card, index) in item.items"
                :key="'cardItem-' + index"
              >
                <CardButton
                  :href="card.href"
                  :title="card.title"
                  :caption="card.caption"
                  :ctaLabel="card.ctaLabel"
                />
              </template>
            </div>
          </section>
        </template>
      </nav>
    </NuxtLayout>
  </div>
</template>

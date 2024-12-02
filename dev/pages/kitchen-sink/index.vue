<script lang="ts" setup>
import KitchenSinkNavigation from "~/components/site/container/KitchenSinkNavigation.vue";
import ContenetSection from "~/components/system/container/ContenetSection.vue";
</script>
<template>
  <div>
    <NuxtLayout name="sidebar-content">
      <template #sidebar>
        <KitchenSinkNavigation />
      </template>
      <template #content>
        <article slot="content">
          <h1>Kitchen Sink</h1>
          <ContenetSection title-tag="h2" title="hoge" id="hoge">
            <p>hogehoge</p>
          </ContenetSection>
          <!-- <ButtonContent />
          <RadioGroupContent />
          <AccordionContent />
          <ModalContent /> -->
          <section>
            <h2>Complex input form</h2>
            <form>
              <!-- <Formula /> -->
            </form>
          </section>
        </article>
      </template>
    </NuxtLayout>
  </div>
</template>

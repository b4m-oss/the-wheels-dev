<script lang="ts" setup>
import KitchenSinkNavigation from "~/components/site/container/KitchenSinkNavigation.vue";
import PageTextTitle from "~/components/system/atoms/PageTextTitle.vue";
import ContentSection from "~/components/system/container/ContentSection.vue";
import ButtonContent from "~/components/site/content/01_Button.vue";
import RadioGroupContent from "~/components/site/content/02_RadioGroup.vue";
import AccordionContent from "~/components/site/content/03_Accordion.vue";
import ModalContent from "~/components/site/content/04_Modal.vue";
import Formula from "~/components/site/content/Formula.vue";
</script>
<template>
  <div>
    <NuxtLayout name="sidebar-content">
      <template #sidebar>
        <KitchenSinkNavigation />
      </template>
      <template #content>
        <div class="twls-layout">
          <article>
            <PageTextTitle>Kitchen Sink</PageTextTitle>
            <ButtonContent />
            <RadioGroupContent />
            <AccordionContent />
            <ModalContent />
            <ContentSection
              title-tag="h2"
              title="Complex input form"
              id="complex-input-form"
            >
              <form>
                <Formula />
              </form>
            </ContentSection>
          </article>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

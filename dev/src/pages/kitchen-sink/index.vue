<script lang="ts" setup>
import KitchenSinkNavigation from "~/components/site/container/KitchenSinkNavigation.vue";
import ContentSection from "~/components/system/container/ContentSection.vue";
import ButtonContent from "~/components/site/content/01_Button.vue";
import RadioGroupContent from "~/components/site/content/02_RadioGroup.vue";
import AccordionContent from "~/components/site/content/03_Accordion.vue";
import ModalContent from "~/components/site/content/04_Modal.vue";
import Formula from "~/components/site/content/Formula.vue";
import IAlertTriangle from "~/components/system/icons/IAlertTriangle.vue";
import IPC from "~/components/system/icons/IPC.vue";
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
          <section>
            <h2>Icons</h2>
            <IAlertTriangle width="256" height="232" fill="var(--text-highlight)" rotate="30" />
            <IPC width="16" height="15" fill="var(--text-highlight)" rotate="" />
          </section>
        </article>
      </template>
    </NuxtLayout>
  </div>
</template>

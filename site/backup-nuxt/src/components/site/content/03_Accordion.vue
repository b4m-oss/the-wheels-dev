<script lang="ts" setup>
import ContentSection from "~/components/system/container/ContentSection.vue";
import AccordionContainer from "~/components/system/lists/AccordionContainer.vue";
import Accordion from "~/components/system/organisms/Accordion.vue";
</script>

<template>
  <ContentSection titleTag="h2" title="Accordion" id="accordion">
    <AccordionContainer>
      <Accordion tabLabel="摂津国とは">
        <p>
          摂津国（せっつのくに、旧字体:攝津國）は、日本の令制国の一つ。近畿地方に属する。現在の大阪府北中部の大半と兵庫県南東部にあたる。
        </p>
      </Accordion>
      <Accordion tabLabel="山城国とは">
        <p>
          山城国（やましろのくに）は、日本の地方行政区分である令制国の一つ。畿内に属する。
        </p>
      </Accordion>
    </AccordionContainer>
  </ContentSection>
</template>

<style></style>

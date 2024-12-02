<script lang="ts" setup>
import ContentSection from "~/components/system/container/ContentSection.vue";
import PartsGalleryItem from "~/components/site/elements/PartsGalleryItem.vue";
import Button from "~/components/system/atoms/Button.vue";
import {
  buttonGalleryList,
  buttonFullGalleryList,
} from "~/constants/buttonGalleries";
</script>
<template>
  <ContentSection titleTag="h2" title="Button" id="button">
    <dl class="parts-gallery">
      <template
        v-for="(item, index) in buttonGalleryList"
        :key="'buttonGallry-' + index"
      >
        <PartsGalleryItem :title="item.title">
          <Button
            :label="item.label"
            :type="item.buttonType"
            :class="item.buttonClass"
            :is-full="item.isFull"
            :is-disabled="item.isDiabled"
            :data-attributes="null"
            >{{ item.label }}</Button
          >
        </PartsGalleryItem>
      </template>
    </dl>
    <dl class="parts-gallery full">
      <template
        v-for="(item, index) in buttonFullGalleryList"
        :key="'buttonGallry-' + index"
      >
        <PartsGalleryItem :title="item.title">
          <Button
            :label="item.label"
            :type="item.buttonType"
            :class="item.buttonClass"
            :is-full="item.isFull"
            :is-disabled="item.isDiabled"
            :data-attributes="null"
            >{{ item.label }}</Button
          >
        </PartsGalleryItem>
      </template>
    </dl>
  </ContentSection>
</template>

<style></style>

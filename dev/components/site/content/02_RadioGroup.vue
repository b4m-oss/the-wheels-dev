<script lang="ts" setup>
import ContentSection from "~/components/system/container/ContenetSection.vue";
import RadioGroup from "~/components/system/lists/RadioGroup.vue";
import RadioGroupItem from "~/components/system/atoms/RadioGroupItem.vue";
</script>

<template>
  <ContentSection titleTag="h2" title="Radio Group" id="radio-group">
    <RadioGroup>
      <RadioGroupItem
        label="兵庫県"
        name="radio-group-sample"
        :isChecked="false"
      />
      <RadioGroupItem
        label="大阪府"
        name="radio-group-sample"
        :isChecked="true"
      />
      <RadioGroupItem
        label="京都府"
        name="radio-group-sample"
        :isChecked="false"
      />
    </RadioGroup>
  </ContentSection>
</template>

<style></style>

<script lang="ts" setup></script>

<template>
  <div class="twls-form-element-group formula-container">
    <div class="formula-group">
      <label class="twls-form-single-input formula-item-id"
        ><span class="twls-form-label">id</span
        ><input type="text" name="formula[]"
      /></label>
      <label class="twls-form-single-input formula-item-formula"
        ><span class="twls-form-label">formula</span
        ><input type="text" name="formula[]"
      /></label>
      <div class="formula-item-result">
        <span class="formula-result-label">result</span>
        <p class="formula-result-container">
          <span>1342</span>
        </p>
      </div>
    </div>
    <div class="twls-accordion formula-accordion">
      <details class="accordion-item">
        <summary class="accordion-tab">More...</summary>
        <div class="accordion-detail">
          <label class="twls-form-multiline-input">
            <span>Annotation</span>
            <textarea name="formulaAnnotation[]"></textarea>
          </label>
        </div>
      </details>
    </div>
  </div>
</template>

<style></style>

<script lang="ts" setup></script>

<template>
  <NuxtLayout name="single-content">
    <h1>Forms</h1>
    <section>
      <h2>文字入力系</h2>
      <section>
        <h3>1行入力</h3>
        <form>
          <div class="twls-form-input-element">
            <label class="twls-label-text-group">
              <span class="twls-label-text">企業・組織名</span>
              <input
                type="text"
                name="企業・組織名"
                minlength="2"
                maxlength="100"
                required
              />
            </label>
            <div class="twls-form-input-assist">
              <ul class="twls-form-input-message-slot">
                <li class="twls-form-assist-message">
                  アシストメッセージをここに記入します。
                </li>
                <li class="twls-form-assist-message">
                  なるべく、一文は短く収めましょう。
                </li>
              </ul>
              <div class="twls-form-input-text-counter">
                <p>0/100</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </section>
  </NuxtLayout>
</template>

<style></style>

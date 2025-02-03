<script lang="ts" setup>
import KitchenSinkNavigation from "~/components/site/container/KitchenSinkNavigation.vue";
import ContentSection from "~/components/system/container/ContentSection.vue";
import ButtonContent from "~/components/site/content/01_Button.vue";
import RadioGroupContent from "~/components/site/content/02_RadioGroup.vue";
import AccordionContent from "~/components/site/content/03_Accordion.vue";
import ModalContent from "~/components/site/content/04_Modal.vue";
import MessagePanel from "~/components/system/elements/MessagePanel.vue";
import Formula from "~/components/site/content/Formula.vue";
import IAlertTriangle from "~/components/system/icons/IAlertTriangle.vue";
import IPC from "~/components/system/icons/IPC.vue";
import ISun from "~/components/system/icons/ISun.vue";
import IMoon from "~/components/system/icons/IMoon.vue";
import ILock from "~/components/system/icons/ILock.vue";
import IArrow from "~/components/system/icons/IArrow.vue";
import ITriangle from "~/components/system/icons/ITriangle.vue";
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
            title="Message Panel"
            id="message-panel"
          >
            <MessagePanel html-class="">
              <template #header>注釈パネル</template>
              <template #content>
                <p>注釈パネルは、本文に対して補足的な情報を提示するときに利用します。主に注意喚起をしたい場合と、読み飛ばしても問題のない、補助的な情報の2つの用途で用います。見出しと本文に分かれ、見出しにはアイコンが適用できます。本文はエッセンシャルアトムですが、見出しとアイコンは、オプショナルアトムです。</p>
              </template>
            </MessagePanel>
            <MessagePanel html-class="twls-state_optional">
              <template #header>注釈パネル</template>
              <template #content>
                <p>注釈パネルは、本文に対して補足的な情報を提示するときに利用します。主に注意喚起をしたい場合と、読み飛ばしても問題のない、補助的な情報の2つの用途で用います。見出しと本文に分かれ、見出しにはアイコンが適用できます。本文はエッセンシャルアトムですが、見出しとアイコンは、オプショナルアトムです。</p>
              </template>
            </MessagePanel>
            <MessagePanel html-class="twls-state_warning">
              <template #header>注意パネル</template>
              <template #content>
                <p>注釈パネルは、本文に対して補足的な情報を提示するときに利用します。主に注意喚起をしたい場合と、読み飛ばしても問題のない、補助的な情報の2つの用途で用います。見出しと本文に分かれ、見出しにはアイコンが適用できます。本文はエッセンシャルアトムですが、見出しとアイコンは、オプショナルアトムです。</p>
              </template>
            </MessagePanel>
            <MessagePanel html-class="twls-state_caution">
              <template #header>警告パネル</template>
              <template #content>
                <p>注釈パネルは、本文に対して補足的な情報を提示するときに利用します。主に注意喚起をしたい場合と、読み飛ばしても問題のない、補助的な情報の2つの用途で用います。見出しと本文に分かれ、見出しにはアイコンが適用できます。本文はエッセンシャルアトムですが、見出しとアイコンは、オプショナルアトムです。</p>
              </template>
            </MessagePanel>
            <MessagePanel html-class="twls-state_alert">
              <template #header>警告パネル</template>
              <template #content>
                <p>注釈パネルは、本文に対して補足的な情報を提示するときに利用します。主に注意喚起をしたい場合と、読み飛ばしても問題のない、補助的な情報の2つの用途で用います。見出しと本文に分かれ、見出しにはアイコンが適用できます。本文はエッセンシャルアトムですが、見出しとアイコンは、オプショナルアトムです。</p>
              </template>
            </MessagePanel>
          </ContentSection>
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
            <IAlertTriangle width="16" height="16" fill="var(--text-highlight)" rotate="" />
            <IPC width="16" height="15" fill="var(--text-highlight)" rotate="" />
            <ISun width="16" height="16" fill="var(--text-highlight)" rotate="" />
            <IMoon width="16" height="16" fill="var(--text-highlight)" rotate="" />
            <ILock width="16" height="16" fill="var(--text-highlight)" rotate="" />
            <IArrow width="16" height="16" fill="var(--text-highlight)" rotate="" />
            <ITriangle width="16" height="16" fill="var(--text-highlight)" rotate="" />
          </section>
        </article>
      </template>
    </NuxtLayout>
  </div>
</template>

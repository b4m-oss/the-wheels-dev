<script lang="ts" setup>
import ContentSection from "~/components/system/container/ContentSection.vue";
import Modal from "~/components/system/container/Modal.vue";
import Button from "~/components/system/atoms/Button.vue";
// import { modal } from "the-wheels";
</script>

<template>
  <ContentSection titleTag="h2" title="Modal" id="modal">
    <Modal modalId="sample-modal" modalTitle="律令制とは">
      <template #modal-content>
        <p>
          日本の律令制は、中国の制度を参考にし設立され、7世紀後期（飛鳥時代後期）から10世紀頃まで実施された。開始後約100年間（8世紀後期まで）は経済・軍事に関してはほぼ設立時の制度に忠実に従った国家運営が行われた（律令国家・律令体制・律令時代）。
        </p>
        <p>
          制度設立の背景は、7世紀初頭から始まった中央集権国家実現・国力増強への取り組みがあった。また白村江の戦い（663年）の大敗後に、唐に対峙する危機意識を背景とし、唐の仕組みを取り入れ、強力な国家体制の実現、国民皆兵制による大規模な国家軍事力の設立、他国（新羅、渤海）に対する宗主の位置付けを目指したとも考えられている。
        </p>
        <p>
          日本の律令制は、中国の制度を参考にし設立され、7世紀後期（飛鳥時代後期）から10世紀頃まで実施された。開始後約100年間（8世紀後期まで）は経済・軍事に関してはほぼ設立時の制度に忠実に従った国家運営が行われた（律令国家・律令体制・律令時代）。
        </p>
        <p>
          制度設立の背景は、7世紀初頭から始まった中央集権国家実現・国力増強への取り組みがあった。また白村江の戦い（663年）の大敗後に、唐に対峙する危機意識を背景とし、唐の仕組みを取り入れ、強力な国家体制の実現、国民皆兵制による大規模な国家軍事力の設立、他国（新羅、渤海）に対する宗主の位置付けを目指したとも考えられている。
        </p>
        <p>
          日本の律令制は、中国の制度を参考にし設立され、7世紀後期（飛鳥時代後期）から10世紀頃まで実施された。開始後約100年間（8世紀後期まで）は経済・軍事に関してはほぼ設立時の制度に忠実に従った国家運営が行われた（律令国家・律令体制・律令時代）。
        </p>
        <p>
          制度設立の背景は、7世紀初頭から始まった中央集権国家実現・国力増強への取り組みがあった。また白村江の戦い（663年）の大敗後に、唐に対峙する危機意識を背景とし、唐の仕組みを取り入れ、強力な国家体制の実現、国民皆兵制による大規模な国家軍事力の設立、他国（新羅、渤海）に対する宗主の位置付けを目指したとも考えられている。
        </p>
      </template>
      <template #modal-footer>
        <Button
          type="button"
          class="ghost twls-modal-closer"
          label="閉じる"
          :data-attributes="undefined"
          :is-disabled="false"
          :is-full="false"
        />
      </template>
      <template #modal-initiater>
        <Button
          ref="modalOpener"
          modalId="sample-modal"
          type="button"
          class="twls-modal-opener"
          label="律令制とは"
          :data-attributes="{ 'data-twls-modal-open': 'sample-modal' }"
          :is-disabled="false"
          :is-full="false"
        />
      </template>
    </Modal>
  </ContentSection>
</template>

<style></style>

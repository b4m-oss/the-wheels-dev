<script lang="ts" setup>
import PrivacyPolicy from '~/components/site/elements/PrivacyPolicy.vue';
import TOC from '~/components/site/elements/TOC.vue';
import StepNavList from '~/components/system/lists/StepNavList.vue';
import Checkbox from '~/components/system/atoms/form/Checkbox.vue';
</script>
<template>
  <div>
    <NuxtLayout name="single-content">
      <h1>Typical Contact Form</h1>
      <form action="">
        <div>
          <StepNavList />
        </div>
        <fieldset>
          <legend>サイト利用規約・プライバシーポリシーに同意が必要です</legend>
          <b>サイト利用規約</b>
          <TOC />
          <b>プライバシーポリシー</b>
          <PrivacyPolicy />
          <Checkbox :required="true">サイト利用規約・プライバシーポリシーに同意する</Checkbox>
        </fieldset>
        <fieldset>
          <legend>お問い合わせの種類を選択してください</legend>
          <div class="twls-select-group">
            <label>
              <input type="radio" name="contact-inquiry-type">
              <span class="twls-label-text">当社へのご発注をご検討の方</span>
            </label>
            <label>
              <input type="radio" name="contact-inquiry-type">
              <span class="twls-label-text">取材のお申し込み</span>
            </label>
            <label>
              <input type="radio" name="contact-inquiry-type">
              <span class="twls-label-text">営業・協業のご提案</span>
            </label>
            <label>
              <input type="radio" name="contact-inquiry-type">
              <span class="twls-label-text">その他</span>
            </label>
          </div>
          <div class="twls-alert">
            <p>営業・協業が目的の方は<strong>必ず</strong>「営業・協業のご提案」からご連絡ください。</p>
            <p>詳しくは、<a href="#">サイト利用規約</a>をご覧ください。</p>
          </div>
        </fieldset>
        <fieldset>
          <legend>ご検討内容について</legend>
          <label>
            <input type="checkbox" name="contact-customer-service-type">
            <span class="twls-label-text">Webサイト・ランディングページ</span>
          </label>
          <label>
            <input type="checkbox" name="contact-customer-service-type">
            <span class="twls-label-text">Web/SNSマーケティング（SEO/広告等）</span>
          </label>
          <label>
            <input type="checkbox" name="contact-customer-service-type">
            <span class="twls-label-text">動画制作・配信</span>
          </label>
          <label>
            <input type="checkbox" name="contact-customer-service-type">
            <span class="twls-label-text">Webシステム・アプリ</span>
          </label>
          <label>
            <input type="checkbox" name="contact-customer-service-type">
            <span class="twls-label-text">その他</span>
          </label>
        </fieldset>
        <label>
          <span class="twls-label-text">ご予算</span>
          <select name="contact-customer-budget" required>
            <option value="" selected hidden>選択してください</option>
            <option value="5万円~25万円">5万円~25万円</option>
            <option value="26万円~100万円">26万円~100万円</option>
            <option value="101万円~250万円">101万円~250万円</option>
            <option value="251万円~500万円">250万円~500万円</option>
            <option value="501万円~1,000万円">501万円~1,000万円</option>
            <option value="1,000万円以上">1,000万円以上</option>
            <option value="1,000万円以上">予算未設定</option>
          </select>
        </label>
        <div class="twls-input-field-group">
          <label>
            <span class="twls-label-text">ご検討内容の詳細についてお知らせください</span>
            <textarea name="contact-customer-detail" maxlength="3000"></textarea>
          </label>
        </div>
        <fieldset>
          <legend>お客様情報をご記載ください</legend>
          <div class="twls-input-field-group">
            <label><span class="twls-label-text">お名前</span><input type="text" name="contact-user-name" maxlength="200" required></label>
            <ul class="twls-input-field-messages">
              <li>お仕事でお問い合わせの方は、ビジネスでご利用のお名前でお願いいたします</li>
            </ul>
          </div>
          <div class="twls-input-field-group">
            <label><span class="twls-label-text">メールアドレス</span><input type="email" name="" maxlength="200" required></label>
            <ul class="twls-input-field-messages">
              <li>こちらにご記入のメールアドレスに返信いたします。必ず受信が可能なアドレスを記載ください</li>
            </ul>
          </div>
          <label>
            <span class="twls-label-text">組織種別</span>
            <div class="twls-input-field-messages">
              <p>選択肢については、以下の要領でお願いいたします</p>
              <dl>
                <div>
                  <dt>法人</dt>
                  <dd>会社組織や、公共団体などの組織で、事業としてご発注の方</dd>
                </div>
                <div>
                  <dt>個人事業主</dt>
                  <dd>個人事業主（フリーランス・自営業）の方が、ご自身の事業としてご発注の方</dd>
                </div>
                <div>
                  <dt>個人</dt>
                  <dd>プライベートでのご利用においてご発注の方</dd>
                </div>
              </dl>
            </div>
            <select name="contact-user-type">
              <option value="" selected hidden required>選択してください</option>
              <option value="法人">法人</option>
              <option value="個人事業主">個人事業主</option>
              <option value="個人">個人</option>
            </select>
          </label>
          <label>屋号</label>
        </fieldset>
      </form>
    </NuxtLayout>
  </div>
</template>

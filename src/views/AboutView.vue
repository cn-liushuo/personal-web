<template>
  <LsCardBody>
    <div class="about">
      <LsPageTitle>关于</LsPageTitle>

      <n-space vertical :size="24">
        <p class="intro">
          我是刘铄，一名偏 Frontend(前端) 的软件开发工程师。
          以下为住址、家庭背景及教育、培训与资格等信息展示位，条目将随时间补充更新。
        </p>

        <section class="about-section">
          <h3 class="about-section__title">教育经历</h3>
          <p class="about-section__placeholder">
            学校、专业、学历与就读时间等，后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <h3 class="about-section__title">培训经历</h3>
          <p class="about-section__placeholder">
            机构、课程主题、时长与结业时间等，后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <h3 class="about-section__title">资格证书</h3>
          <p class="about-section__placeholder">
            证书名称、颁发机构、编号（可选）与有效期等，后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <h3 class="about-section__title">家庭背景</h3>
          <p class="about-section__placeholder">
            家庭成员概况、成长环境等（注意隐私与表述分寸），后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <h3 class="about-section__title">住址</h3>
          <p class="about-section__placeholder">
            现居城市或详细地址（可按隐私程度填写），后续在此补充。
          </p>
        </section>
      </n-space>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
  width: 100%;
}

.intro {
  margin: 0;
  line-height: 1.8;
}

.about-section__title {
  margin: 0 0 8px;
  padding: 6px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  background: #ffffff;
}

.about-section__placeholder {
  margin: 0;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.55);
}
</style>

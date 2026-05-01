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
          <LsSectionTitle compact>教育经历</LsSectionTitle>
          <p class="about-section__placeholder">
            学校、专业、学历与就读时间等，后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <LsSectionTitle compact>培训经历</LsSectionTitle>
          <p class="about-section__placeholder">
            机构、课程主题、时长与结业时间等，后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <LsSectionTitle compact>资格证书</LsSectionTitle>
          <p class="about-section__placeholder">
            证书名称、颁发机构、编号（可选）与有效期等，后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <LsSectionTitle compact>家庭背景</LsSectionTitle>
          <p class="about-section__placeholder">
            家庭成员概况、成长环境等（注意隐私与表述分寸），后续在此补充。
          </p>
        </section>

        <n-divider dashed />

        <section class="about-section">
          <LsSectionTitle compact>住址</LsSectionTitle>
          <n-space vertical :size="8">
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">现住址</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">辽宁省大连市沙河口区西安路街道华阳·风尚小区</span>
            </p>
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">家庭住址</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">赤峰市红山区站前街道金百合北区</span>
            </p>
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">故乡</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">赤峰市喀喇沁旗美林镇福合源村/椴木沟门村</span>
            </p>
          </n-space>
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

.about-section__placeholder {
  margin: 0;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.55);
}

.about-item-label {
  display: inline-flex;
  justify-content: space-between;
  align-items: baseline;
  width: 6em;
}

.about-item-label-text {
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
  text-justify: inter-ideograph;
  width: calc(100% - 1em);
}

.about-item-label-text::after {
  content: "";
  display: inline-block;
  width: 100%;
}

.about-inline-item {
  display: grid;
  grid-template-columns: 6em 1fr;
  align-items: baseline;
}

.about-item-value {
  white-space: nowrap;
}
</style>

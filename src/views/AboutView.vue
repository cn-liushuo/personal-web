<template>
  <LsCardBody>
    <div class="about">
      <LsPageTitle>关于</LsPageTitle>

      <n-space vertical :size="24">
        <p class="intro">
          我是刘铄，一名偏 Frontend(前端)和Agent(智能体) 的软件开发工程师。
          以下为住址、家庭背景及教育、培训与资格等信息展示位，条目将随时间补充更新。
        </p>

        <section class="about-section">
          <LsSectionTitle compact>教育经历</LsSectionTitle>
          <n-space vertical :size="8">
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">学校</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">东营科技职业学院</span>
            </p>
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">专业</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">现代移动通信技术</span>
            </p>
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">时间</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">2021年9月 - 2024年6月</span>
            </p>
            <div class="about-multiline">
              <p class="about-section__placeholder about-multiline__label">
                <strong class="about-item-label">
                  <span class="about-item-label-text">在校经历</span>
                  <span class="about-item-colon">：</span>
                </strong>
              </p>
              <div class="about-multiline__content">
                <p class="about-section__placeholder">东营科技职业学院秘书部干事；</p>
                <p class="about-section__placeholder">信息工程学院秘书部部长；</p>
                <p class="about-section__placeholder">信息工程学院纪检部秘书；</p>
              </div>
            </div>
          </n-space>
        </section>

        <section class="about-section">
          <LsSectionTitle compact>培训经历</LsSectionTitle>
          <n-space vertical :size="8">
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">机构</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">青岛百杉软件科技有限公司</span>
            </p>
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">课程</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">前端开发、Java 开发</span>
            </p>
            <p class="about-section__placeholder about-inline-item">
              <strong class="about-item-label">
                <span class="about-item-label-text">时间</span>
                <span class="about-item-colon">：</span>
              </strong>
              <span class="about-item-value">2024年3月 - 2024年6月</span>
            </p>
          </n-space>
        </section>

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

.about-multiline {
  display: grid;
  grid-template-columns: 6em 1fr;
  align-items: start;
  gap: 0;
}

.about-multiline__label {
  margin: 0;
}

.about-multiline__content {
  p {
    margin: 0 0 4px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-item-value {
  white-space: nowrap;
}
</style>

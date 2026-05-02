<template>
  <LsCardBody>
    <div class="about">
      <LsPageTitle>关于</LsPageTitle>

      <n-space vertical :size="24">
        <p class="intro">
          我是刘铄，一名偏 Frontend(前端)和Agent(智能体) 的软件开发工程师。
          以下为住址、家庭背景及教育、培训与资格等信息展示。
        </p>

        <section class="about-section">
          <LsSectionTitle compact>教育经历</LsSectionTitle>
          <LsTable :columns="educationColumns" :data="educationData" />
        </section>

        <section class="about-section">
          <LsSectionTitle compact>培训经历</LsSectionTitle>
          <LsTable :columns="trainingColumns" :data="trainingData" />
        </section>

        <section class="about-section">
          <LsSectionTitle compact>资格证书</LsSectionTitle>
          <p v-if="certificatesData.length === 0" class="placeholder">
            暂无证书信息
          </p>
          <LsTable v-else :columns="certificatesColumns" :data="certificatesData" />
        </section>

        <section class="about-section">
          <LsSectionTitle compact>家庭背景</LsSectionTitle>
          <LsTable :columns="familyColumns" :data="familyData" />
        </section>

        <section class="about-section">
          <LsSectionTitle compact>住址</LsSectionTitle>
          <LsTable :columns="addressColumns" :data="addressData" />
        </section>
      </n-space>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import LsTable from "@/components/LsTable.vue";
import aboutData from "@/data/aboutData.json";

// 教育经历表格列定义
const educationColumns = [
  { key: "school", title: "学校" },
  { key: "major", title: "专业" },
  { key: "degree", title: "学历" },
  { key: "academic", title: "学位" },
  { key: "duration", title: "时间" },
  { key: "experience", title: "在校经历" }
];

// 培训经历表格列定义
const trainingColumns = [
  { key: "institution", title: "机构" },
  { key: "course", title: "课程" },
  { key: "duration", title: "时间" }
];

// 资格证书表格列定义
const certificatesColumns = [
  { key: "name", title: "证书名称" },
  { key: "issuer", title: "颁发机构" },
  { key: "date", title: "获得时间" }
];

// 家庭背景表格列定义
const familyColumns = [
  { key: "relation", title: "称呼" },
  { key: "name", title: "姓名" },
  { key: "birthDate", title: "出生日期" },
  { key: "occupation", title: "职业" },
  { key: "income", title: "年收入" }
];

// 住址表格列定义
const addressColumns = [
  { key: "type", title: "类型" },
  { key: "value", title: "地址" }
];

// 数据（JSON）
const educationData = reactive(aboutData.education.data);
const trainingData = reactive(aboutData.training.data);
const certificatesData = reactive(aboutData.certificates.data);
const familyData = reactive(aboutData.familyBackground.data);
const addressData = reactive(aboutData.address.data);
</script>

<style scoped lang="scss">
.about {
  width: 100%;
}

.intro {
  margin: 0;
  line-height: 1.8;
}

.placeholder {
  margin: 0;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.55);
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  :deep(.ls-section-title__text) {
    font-size: 16px;
  }

  .intro {
    font-size: 14px;
    line-height: 1.6;
  }
}

/* 平板端适配 */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  :deep(.ls-section-title__text) {
    font-size: 17px;
  }
}
</style>

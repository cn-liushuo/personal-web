<template>
  <LsCardBody>
    <div class="about">
      <LsPageTitle>关于</LsPageTitle>

      <n-space vertical :size="24">
        <p class="intro">
          我是刘铄，一名偏 Frontend(前端)和Agent(智能体) 的软件开发工程师。
          以下为住址、家庭背景及教育、培训与资格等信息展示。
        </p>

        <!-- 教育经历 -->
        <section class="about-section">
          <LsSectionTitle>教育经历</LsSectionTitle>
          <!-- 桌面端：表格 -->
          <div class="table-desktop">
            <LsTable :columns="educationColumns" :data="educationData" />
          </div>
          <!-- 移动端：卡片 -->
          <div class="cards-mobile">
            <n-card
              v-for="(item, index) in educationData"
              :key="index"
              size="small"
              :title="item.duration"
              class="info-card"
            >
              <p class="card-item"><span class="card-label">学校：</span>{{ item.school }}</p>
              <p class="card-item"><span class="card-label">专业：</span>{{ item.major }}</p>
              <p class="card-item"><span class="card-label">学历：</span>{{ item.degree }}</p>
              <p class="card-item"><span class="card-label">学位：</span>{{ item.academic }}</p>
              <p class="card-item"><span class="card-label">在校经历：</span>{{ item.experience }}</p>
            </n-card>
          </div>
        </section>

        <!-- 培训经历 -->
        <section class="about-section">
          <LsSectionTitle>培训经历</LsSectionTitle>
          <div class="table-desktop">
            <LsTable :columns="trainingColumns" :data="trainingData" />
          </div>
          <div class="cards-mobile">
            <n-card
              v-for="(item, index) in trainingData"
              :key="index"
              size="small"
              :title="item.duration"
              class="info-card"
            >
              <p class="card-item"><span class="card-label">机构：</span>{{ item.institution }}</p>
              <p class="card-item"><span class="card-label">课程：</span>{{ item.course }}</p>
            </n-card>
          </div>
        </section>

        <!-- 资格证书 -->
        <section class="about-section">
          <LsSectionTitle>资格证书</LsSectionTitle>
          <p v-if="certificatesData.length === 0" class="placeholder">
            暂无证书信息
          </p>
          <template v-else>
            <div class="table-desktop">
              <LsTable :columns="certificatesColumns" :data="certificatesData" />
            </div>
            <div class="cards-mobile">
              <n-card
                v-for="(item, index) in certificatesData"
                :key="index"
                size="small"
                :title="item.name"
                class="info-card"
              >
                <p class="card-item"><span class="card-label">颁发机构：</span>{{ item.issuer }}</p>
                <p class="card-item"><span class="card-label">获得时间：</span>{{ item.date }}</p>
              </n-card>
            </div>
          </template>
        </section>

        <!-- 家庭背景 -->
        <section class="about-section">
          <LsSectionTitle>家庭背景</LsSectionTitle>
          <div class="table-desktop">
            <LsTable :columns="familyColumns" :data="familyData" />
          </div>
          <div class="cards-mobile">
            <n-card
              v-for="(item, index) in familyData"
              :key="index"
              size="small"
              :title="item.relation"
              class="info-card"
            >
              <p class="card-item"><span class="card-label">姓名：</span>{{ item.name }}</p>
              <p class="card-item"><span class="card-label">出生日期：</span>{{ item.birthDate }}</p>
              <p class="card-item"><span class="card-label">职业：</span>{{ item.occupation }}</p>
              <p class="card-item"><span class="card-label">年收入：</span>{{ item.income }}</p>
            </n-card>
          </div>
        </section>

        <!-- 住址 -->
        <section class="about-section">
          <LsSectionTitle>住址</LsSectionTitle>
          <div class="table-desktop">
            <LsTable :columns="addressColumns" :data="addressData" />
          </div>
          <div class="cards-mobile">
            <n-card
              v-for="(item, index) in addressData"
              :key="index"
              size="small"
              :title="item.type"
              class="info-card"
            >
              <p class="card-item">{{ item.value }}</p>
            </n-card>
          </div>
        </section>
      </n-space>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import LsTable from "@/components/lsTable.vue";
import aboutData from "@/data/aboutData.json";

// 类型定义
interface Certificate {
  name: string;
  issuer: string;
  date: string;
}

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
const certificatesData = reactive(aboutData.certificates.data as Certificate[]);
const familyData = reactive(aboutData.familyBackground.data);
const addressData = reactive(aboutData.address.data);
</script>

<style scoped lang="scss">
.about {
  width: 100%;
}

.about-section {
  :deep(.ls-section-title) {
    margin-bottom: 8px;
  }
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

.cards-mobile {
  display: none;
}

.info-card {
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  &:last-child {
    margin-bottom: 0;
  }

  :deep(.n-card-header) {
    background: rgba(var(--ls-theme-rgb), 0.08);
    border-bottom: 1px solid rgba(var(--ls-theme-rgb), 0.15);
    padding: 12px 16px;
    border-radius: 12px 12px 0 0;
  }

  :deep(.n-card-header__main) {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    font-size: 15px;
  }

  :deep(.n-card__content) {
    padding: 16px;
  }
}

.card-item {
  margin: 0 0 10px;
  line-height: 1.5;
  font-size: 14px;

  &:last-child {
    margin-bottom: 0;
  }
}

.card-label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  margin-right: 4px;
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

  .table-desktop {
    display: none;
  }

  .cards-mobile {
    display: block;
  }
}

/* 平板端适配 */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  :deep(.ls-section-title__text) {
    font-size: 17px;
  }
}
</style>

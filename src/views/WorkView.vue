<template>
  <LsCardBody>
    <div class="work">
      <LsPageTitle>工作</LsPageTitle>
      <n-space vertical :size="24">
        <p class="intro">
          以下为工作经历与职责说明。
        </p>

        <!-- 桌面端：表格 -->
        <div class="work-table-desktop">
          <LsTable :columns="workColumns" :data="workData" />
        </div>

        <!-- 移动端：卡片 -->
        <div class="work-cards-mobile">
          <n-card
            v-for="(item, index) in workData"
            :key="index"
            size="small"
            :title="item.duration"
            class="work-card"
          >
            <p class="work-card-item">
              <span class="work-card-label">公司：</span>
              <span class="work-card-value">{{ item.company }}</span>
            </p>
            <p class="work-card-item">
              <span class="work-card-label">职位：</span>
              <span class="work-card-value">{{ item.position }}</span>
            </p>
            <p class="work-card-item">
              <span class="work-card-label">工作内容：</span>
              <span class="work-card-value">{{ item.description }}</span>
            </p>
          </n-card>
        </div>
      </n-space>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import LsTable from "@/components/lsTable.vue";
import workJson from "@/data/workData.json";

// 工作经历表格列定义
const workColumns = [
  { key: "duration", title: "时间" },
  { key: "company", title: "公司" },
  { key: "position", title: "职位" },
  { key: "description", title: "工作内容" }
];

// 工作经历数据
const workData = reactive(workJson.work.data);
</script>

<style scoped lang="scss">
.work {
  width: 100%;
}

.intro {
  margin: 0;
  line-height: 1.8;
}

.work-cards-mobile {
  display: none;
}

.work-card {
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

.work-card-item {
  margin: 0 0 10px;
  line-height: 1.5;
  font-size: 14px;

  &:last-child {
    margin-bottom: 0;
  }
}

.work-card-label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  margin-right: 4px;
}

.work-card-value {
  color: rgba(0, 0, 0, 0.85);
}

/* 移动端适配 */
@media screen and (max-width: 768px) {
  .intro {
    font-size: 14px;
    line-height: 1.6;
  }

  .work-table-desktop {
    display: none;
  }

  .work-cards-mobile {
    display: block;
  }
}
</style>

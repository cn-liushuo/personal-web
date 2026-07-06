<template>
  <lsCardBody>
    <div class="about">
      <lsPageTitle>关于</lsPageTitle>

      <n-space vertical :size="24">
        <p class="intro">
          我是刘铄，一名偏 Frontend(前端)和Agent(智能体) 的软件开发工程师。
          以下为住址、家庭背景及教育、培训与资格等信息展示。
        </p>

        <!-- 教育经历 -->
        <section class="about-section">
          <lsSectionTitle>教育经历</lsSectionTitle>
          <!-- 桌面端：表格 -->
          <div class="table-desktop">
            <lsTable :columns="educationColumns" :data="educationData" />
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
          <lsSectionTitle>培训经历</lsSectionTitle>
          <div class="table-desktop">
            <lsTable :columns="trainingColumns" :data="trainingData" />
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
          <lsSectionTitle>资格证书</lsSectionTitle>
          <p v-if="certificatesData.length === 0" class="placeholder">
            暂无证书信息
          </p>
          <template v-else>
            <div class="table-desktop">
              <lsTable :columns="certificatesColumns" :data="certificatesData" />
            </div>
            <div class="cards-mobile">
              <n-card
                v-for="(item, index) in certificatesData"
                :key="index"
                size="small"
                :title="item.name"
                class="info-card"
              >
                <div v-if="item.image" class="card-item card-cert-image">
                  <span class="card-label">证书：</span>
                  <n-image
                    :src="item.image"
                    width="120"
                    object-fit="contain"
                    :render-toolbar="lsImagePreviewToolbar"
                    class="cert-image"
                  />
                </div>
                <p class="card-item"><span class="card-label">级别：</span>{{ item.level }}</p>
                <p class="card-item"><span class="card-label">考试科目：</span>{{ item.subject }}</p>
                <p class="card-item"><span class="card-label">等第 / 成绩：</span>{{ item.grade }}</p>
                <p class="card-item"><span class="card-label">获得时间：</span>{{ item.date }}</p>
                <p class="card-item"><span class="card-label">颁发机构：</span>{{ item.issuer }}</p>
              </n-card>
            </div>
          </template>
        </section>

        <!-- 家庭背景 -->
        <section class="about-section">
          <lsSectionTitle>家庭背景</lsSectionTitle>
          <div class="table-desktop">
            <lsTable :columns="familyColumns" :data="familyData" />
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
          <lsSectionTitle>住址</lsSectionTitle>
          <div class="table-desktop">
            <lsTable :columns="addressColumns" :data="addressData" />
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

        <!-- 联系我 -->
        <section class="about-section">
          <lsSectionTitle>联系我</lsSectionTitle>
          <ul class="contact-list">
            <li v-for="item in contactData" :key="item.email">
              <a class="contact-link" :href="`mailto:${item.email}`">{{ item.email }}</a>
            </li>
          </ul>
        </section>
      </n-space>
    </div>
  </lsCardBody>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import lsCardBody from "@/components/lsCardBody.vue";
import lsPageTitle from "@/components/lsPageTitle.vue";
import lsSectionTitle from "@/components/lsSectionTitle.vue";
import lsTable from "@/components/lsTable.vue";
import aboutData from "@/data/aboutData.json";
import { lsImagePreviewToolbar } from "@/utils/lsImagePreviewToolbar";

// 类型定义
interface Certificate {
  name: string;
  level: string;
  /** 考试科目（如 NCRE 科目；无则填「—」） */
  subject: string;
  /** 等第（如良好）或分数成绩（如 86.2）；无则填「—」 */
  grade: string;
  issuer: string;
  date: string;
  /** 证书扫描件文件名（位于 src/data/images/） */
  image?: string;
}

/** 解析「YYYY年M月…」式日期为时间戳；无效或「—」返回 0（倒序时排在末尾） */
function parseChineseDateForSort(dateStr: string): number {
  if (!dateStr || dateStr === "—" || dateStr.trim() === "") return 0;
  const m = dateStr.match(/(\d{4})年(\d{1,2})月(?:(\d{1,2})日)?/);
  if (!m) return 0;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const day = m[3] ? Number(m[3]) : 1;
  return new Date(y, mo, day).getTime();
}

/** 时间段字符串取结束段再解析（如「2021年9月 - 2024年6月」→ 2024年6月） */
function parseDurationEndForSort(durationStr: string): number {
  if (!durationStr || durationStr === "—") return 0;
  const parts = durationStr.split(/\s*-\s*/);
  const end = parts[parts.length - 1]?.trim() ?? "";
  return parseChineseDateForSort(end);
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

/** 证书图片（src/data/images） */
const certificateImageModules = import.meta.glob<string>(
  "@/data/images/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

function resolveCertificateImage(filename?: string): string | undefined {
  if (!filename) return undefined;
  const normalized = filename.replace(/\\/g, "/");
  const entry = Object.entries(certificateImageModules).find(([path]) =>
    path.replace(/\\/g, "/").endsWith(`/${normalized}`)
  );
  return entry?.[1];
}

// 资格证书表格列定义（长文四列单行省略，见 lsTable Column.ellipsis）
const certificatesColumns = [
  { key: "image", title: "证书", type: "image" as const, maxWidth: 72 },
  { key: "name", title: "证书名称", ellipsis: true, maxWidth: 220 },
  { key: "level", title: "级别" },
  { key: "subject", title: "考试科目", ellipsis: true, maxWidth: 300 },
  { key: "grade", title: "等第 / 成绩" },
  { key: "date", title: "获得时间", ellipsis: true, maxWidth: 132 },
  { key: "issuer", title: "颁发机构", ellipsis: true, maxWidth: 240 }
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
// 教育经历按时间段结束时间倒序（新 → 旧）
const educationData = computed(() => {
  const list = [...aboutData.education.data];
  list.sort(
    (a, b) =>
      parseDurationEndForSort(b.duration) - parseDurationEndForSort(a.duration)
  );
  return list;
});
// 培训经历按时间段结束时间倒序
const trainingData = computed(() => {
  const list = [...aboutData.training.data];
  list.sort(
    (a, b) =>
      parseDurationEndForSort(b.duration) - parseDurationEndForSort(a.duration)
  );
  return list;
});
// 资格证书按「获得时间」date 降序（新 → 旧）；同日或无法解析时按证书名称稳定排序
const certificatesData = computed(() => {
  const list = [...(aboutData.certificates.data as Certificate[])].map((item) => ({
    ...item,
    image: resolveCertificateImage(item.image)
  }));
  list.sort((a, b) => {
    const tb = parseChineseDateForSort(b.date);
    const ta = parseChineseDateForSort(a.date);
    if (tb !== ta) return tb - ta;
    return String(a.name).localeCompare(String(b.name), "zh-Hans-CN");
  });
  return list;
});
const familyData = reactive(aboutData.familyBackground.data);
const addressData = reactive(aboutData.address.data);
const contactData = reactive(aboutData.contact.data);
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

.contact-list {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1.8;
}

.contact-link {
  color: rgb(var(--ls-theme-rgb));
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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

.card-cert-image {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
}

.cert-image {
  line-height: 0;
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

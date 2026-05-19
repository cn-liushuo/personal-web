<template>
  <div class="ls-table-wrapper">
    <n-table
      :bordered="bordered"
      :single-line="singleLine"
      :size="size"
      :striped="showStripes"
    >
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="col.key"
            :class="{ 'ls-th-image': col.type === 'image' }"
            :style="cellTdStyle(col)"
          >
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td
            v-for="col in columns"
            :key="col.key"
            :class="{ 'ls-td-image-col': col.type === 'image' }"
            :style="cellTdStyle(col)"
          >
            <n-image
              v-if="col.type === 'image' && cellImageSrc(row, col.key)"
              :src="cellImageSrc(row, col.key)"
              width="56"
              object-fit="contain"
              :render-toolbar="lsImagePreviewToolbar"
              class="ls-td-image"
            />
            <n-ellipsis
              v-else-if="col.ellipsis"
              :tooltip="true"
              class="ls-td-ellipsis"
            >
              {{ cellText(row, col.key) }}
            </n-ellipsis>
            <template v-else>{{ cellText(row, col.key) }}</template>
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { lsImagePreviewToolbar } from '@/utils/lsImagePreviewToolbar'

export interface Column {
  key: string
  title: string
  /** text（默认）为纯文本；image 使用 n-image 展示图片 URL */
  type?: 'text' | 'image'
  /** 为 true 时单行不换行，超出用 n-ellipsis 省略并可在 tooltip 中查看全文 */
  ellipsis?: boolean
  /** 与 ellipsis 搭配：单元格最大宽度（数字为 px，或任意 CSS 长度） */
  maxWidth?: string | number
}

interface Props {
  columns: Column[]
  data: Record<string, any>[]
  bordered?: boolean
  singleLine?: boolean
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  bordered: false,
  singleLine: false,
  size: 'small'
})

/** 数据行超过 3 行（至少 4 行）时启用条纹；依赖 n-table 的 striped，tbody 内偶数行着色 */
const showStripes = computed(() => (props.data?.length ?? 0) >= 3)

function cssMaxWidth(col: Column): string {
  if (col.maxWidth == null) return '200px'
  return typeof col.maxWidth === 'number' ? `${col.maxWidth}px` : String(col.maxWidth)
}

/** 图片列默认宽度（缩略图 56px + 单元格内边距） */
const DEFAULT_IMAGE_COL_WIDTH = 72

function cssWidth(col: Column, fallback: string): string {
  if (col.maxWidth != null) return cssMaxWidth(col)
  return fallback
}

/** 限制列宽：省略列与图片列，避免表格被撑开 */
function cellTdStyle(col: Column): Record<string, string> | undefined {
  if (col.type === 'image') {
    const w = cssWidth(col, `${DEFAULT_IMAGE_COL_WIDTH}px`)
    return { maxWidth: w, width: w, minWidth: w }
  }
  if (!col.ellipsis) return undefined
  const w = cssMaxWidth(col)
  return { maxWidth: w, width: w }
}

function cellText(row: Record<string, any>, key: string): string {
  const v = row[key]
  if (v == null) return ''
  return String(v)
}

function cellImageSrc(row: Record<string, any>, key: string): string | undefined {
  const v = row[key]
  if (v == null || v === '') return undefined
  return String(v)
}
</script>

<style scoped lang="scss">
.ls-table-wrapper {
  overflow-x: auto;
  max-width: 100%;

  /* 移动端滚动条优化 */
  @media screen and (max-width: 768px) {
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }
  }
}

/* n-ellipsis 在 td 内占满宽度，避免单元格被长文撑开换行 */
.ls-td-ellipsis {
  display: block;
  max-width: 100%;
}

.ls-th-image {
  vertical-align: middle;
  text-align: left;
}

.ls-td-image-col {
  vertical-align: middle;
  text-align: center;
}

.ls-td-image {
  display: inline-block;
  line-height: 0;
  max-width: 56px;

  :deep(img) {
    display: block;
    max-width: 56px;
    height: auto;
  }
}
</style>

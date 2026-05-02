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
          <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td
            v-for="col in columns"
            :key="col.key"
            :style="cellTdStyle(col)"
          >
            <n-ellipsis
              v-if="col.ellipsis"
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

export interface Column {
  key: string
  title: string
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

/** 省略列需限制 td 宽度，否则表格会一直撑开无法触发省略 */
function cellTdStyle(col: Column): Record<string, string> | undefined {
  if (!col.ellipsis) return undefined
  const w = cssMaxWidth(col)
  return { maxWidth: w, width: w }
}

function cellText(row: Record<string, any>, key: string): string {
  const v = row[key]
  if (v == null) return ''
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
</style>

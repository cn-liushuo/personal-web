<template>
  <div class="ls-table-wrapper">
    <n-table :bordered="bordered" :single-line="singleLine" :size="size" :striped="striped">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Column {
  key: string
  title: string
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

// 数据超过3行时启用条纹效果
const striped = computed(() => props.data.length > 3)
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
</style>

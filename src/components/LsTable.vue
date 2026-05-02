<template>
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

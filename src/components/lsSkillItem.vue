<template>
  <div class="skill-item">
    <div class="skill-info">
      <span class="skill-name">{{ name }}</span>
      <span class="skill-level">{{ skillInfo.name }}</span>
    </div>
    <n-progress type="line" :percentage="percentage" :color="skillInfo.color" indicator-placement="inside" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface SkillLevel {
  name: string
  color: string
  min: number
  max: number
}

const props = defineProps<{
  name: string
  percentage: number
}>()

// 技能等级定义（从低到高：赤橙黄绿青蓝紫）
const skillLevels: SkillLevel[] = [
  { name: '了解', color: '#EF4444', min: 0, max: 14 },    // 赤
  { name: '熟悉', color: '#F97316', min: 15, max: 28 },   // 橙
  { name: '掌握', color: '#EAB308', min: 29, max: 42 },   // 黄
  { name: '熟练', color: '#22C55E', min: 43, max: 56 },   // 绿
  { name: '精通', color: '#06B6D4', min: 57, max: 70 },   // 青
  { name: '专家', color: '#3B82F6', min: 71, max: 84 },   // 蓝
  { name: '大师', color: '#8B5CF6', min: 85, max: 100 },  // 紫
]

// 根据百分比获取技能等级信息
const skillInfo = computed((): SkillLevel => {
  for (const level of skillLevels) {
    if (props.percentage >= level.min && props.percentage <= level.max) {
      return level
    }
  }
  // 数组恒有首项；超出区间时回退到最低档
  return skillLevels[0]!
})
</script>

<style scoped lang="scss">
.skill-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 4px;
}

.skill-name {
  font-size: 13px;
  line-height: 1.4;
  color: #000000;
  word-break: break-word;
}

.skill-level {
  flex-shrink: 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.55);
}
</style>

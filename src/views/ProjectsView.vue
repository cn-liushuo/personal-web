<template>
  <lsCardBody>
    <div class="projects">
      <lsPageTitle>项目</lsPageTitle>
      <n-space vertical :size="12">
        <p>
          这里将展示个人项目与开源贡献，内容后续补充。
        </p>
        <n-alert title="内容规划" type="info">
          计划补充：项目简介、技术栈、链接与截图等。
        </n-alert>
      </n-space>
    </div>
  </lsCardBody>
</template>

<script setup lang="ts">
import lsCardBody from "@/components/lsCardBody.vue";
import lsPageTitle from "@/components/lsPageTitle.vue";
</script>

<style scoped lang="scss">
.projects {
  width: 100%;
}

p {
  margin: 0;
  line-height: 1.8;
}
</style>

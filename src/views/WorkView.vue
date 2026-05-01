<template>
  <LsCardBody>
    <div class="work">
      <LsPageTitle>工作</LsPageTitle>
      <n-space vertical :size="12">
        <p>
          这里将展示工作经历与职责说明，内容后续补充。
        </p>
        <n-alert title="内容规划" type="info">
          计划补充：公司/岗位、时间段、主要成果与所用技术等。
        </n-alert>
      </n-space>
    </div>
  </LsCardBody>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.work {
  width: 100%;
}

p {
  margin: 0;
  line-height: 1.8;
}
</style>

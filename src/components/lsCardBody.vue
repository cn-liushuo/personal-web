<!-- Card 内页通用容器：统一四周留白（除首页外复用） -->
<template>
  <div class="ls-card-body">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ls-card-body {
  width: 100%;
  margin: 0;
  padding: 0 20px 20px;
  box-sizing: border-box;
}
</style>

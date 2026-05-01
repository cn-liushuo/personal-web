<!-- Card 内页统一页标题 -->
<template>
  <header class="ls-page-title">
    <h1 class="ls-page-title__text">
      <slot />
    </h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ls-page-title {
  position: sticky;
  top: 0;
  z-index: 10;
  isolation: isolate;
  margin-bottom: 12px;
  padding-top: 20px;
  padding-bottom: 10px;
  background: #ffffff;
  border-bottom: 2px solid var(--ls-theme);
}

.ls-page-title::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: #ffffff;
}

.ls-page-title__text {
  margin: 0;
  font-size: 28px;
}
</style>

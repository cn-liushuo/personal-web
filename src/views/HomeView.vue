<template>
  <div class="home">
    <div class="home-content">
      <h1>刘铄</h1>
      <p class="intro">
        我是一名软件开发工程师，当前方向聚焦于 Frontend(前端) 开发，
        关注用户体验、工程化效率与页面性能优化。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home {
  flex: 1;
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.home-content {
  text-align: center;
  padding: 32px;
  background: rgba(var(--ls-theme-rgb), 0.12);
  border-radius: 16px;
  backdrop-filter: blur(4px);
}

h1 {
  margin: 0 0 16px;
  font-size: 48px;
  font-weight: 600;
  color: #000000;
}

.intro {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.85);
  max-width: 480px;
}
</style>

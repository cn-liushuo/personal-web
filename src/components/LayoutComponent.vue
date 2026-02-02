<template>
  <n-layout position="absolute">
    <n-layout-header ref="headerRef" class="main-header"
    >
      <MenuComponent
      />
    </n-layout-header>
    <n-layout-content
        class="main-content"
        :style="{ height: contentHeight + 'px' }"
    >
      <CardComponent>
        <router-view/>
      </CardComponent>
    </n-layout-content>
    <n-layout-footer ref="footerRef" class="main-footer">
      &copy;2024-{{new Date().getFullYear()}}&nbsp;刘铄
    </n-layout-footer
    >
  </n-layout>
</template>

<script setup lang="ts">
import {RouterView} from "vue-router";
import {ref, onMounted, onUnmounted, nextTick} from "vue";
import MenuComponent from "./MenuComponent.vue";
import CardComponent from "./CardComponent.vue"

const headerRef = ref();
const footerRef = ref();
const contentHeight = ref(0);

const calculateContentHeight = () => {
  // 使用 innerHeight 获取窗口高度，保留小数精度
  const windowHeight = window.innerHeight;
  // 使用 getBoundingClientRect() 替代 offsetHeight 来获取更精确的值
  const headerHeight =
      headerRef.value?.$el?.getBoundingClientRect().height || 0;
  const footerHeight =
      footerRef.value?.$el?.getBoundingClientRect().height || 0;

  console.log("windowHeight:", windowHeight);
  console.log("headerHeight:", headerHeight);
  console.log("footerHeight:", footerHeight);

  contentHeight.value = windowHeight - headerHeight - footerHeight;
};

onMounted(() => {
  // 等待 DOM 更新完成
  nextTick(() => {
    calculateContentHeight();
  });

  // 监听窗口大小变化
  window.addEventListener("resize", calculateContentHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", calculateContentHeight);
});
</script>

<style scoped lang="scss">
.main-header {
  background: rgba(128, 128, 128, 0.2);
  padding: 12px;
}

.main-footer {
  text-align: center;
  background: rgba(0, 0, 0, 1);
  padding: 12px;
}

.main-content {
  background: rgba(128, 128, 128, 0.1);
  overflow-y: auto;
  padding: 12px;
}
</style>

<template>
  <n-layout position="absolute" class="root-layout">
    <n-layout-header ref="headerRef" class="main-header"
    >
      <MenuComponent
      />
    </n-layout-header>
    <n-layout-content
        class="main-content"
        :style="{ height: contentHeight + 'px' }"
    >
      <!-- flex 子项需 min-height: 0，否则 height:100% 与内部居中无法生效 -->
      <div class="main-content-inner">
        <CardComponent>
          <router-view/>
        </CardComponent>
      </div>
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
.root-layout {
  height: 100%;
  min-height: 100vh;
}

/* 根 layout：header / content / footer 需在纵向 flex 中，中间区域才能 flex:1 */
.root-layout :deep(> .n-layout-scroll-container) {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
}

.root-layout :deep(.main-content) {
  flex: 1 1 auto;
  min-height: 0;
}

.main-header {
  background: rgba(var(--ls-theme-rgb), 0.12);
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-footer {
  text-align: center;
  background: rgba(var(--ls-theme-rgb), 0.12);
  padding: 12px;
}

.main-content {
  background: rgba(var(--ls-theme-rgb), 0.06);
  overflow: hidden;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1 1 auto;
}

/* n-layout-content 内部会再包一层 scroll-container，需参与 flex 才能撑满高度 */
.main-content :deep(.n-layout-scroll-container) {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.main-content-inner {
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

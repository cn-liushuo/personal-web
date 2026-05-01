<!-- Card 内区块小标题（底部主题色分割线） -->
<template>
  <header class="ls-section-title" :class="{ 'ls-section-title--compact': compact }">
    <component :is="tag" class="ls-section-title__text">
      <slot />
    </component>
  </header>
</template>

<script setup lang="ts">
export type LsSectionHeadingTag = "h2" | "h3";

withDefaults(
  defineProps<{
    /** semantic tag（语义标签）：技术页栏目多为 h2，关于页小节多为 h3 */
    tag?: LsSectionHeadingTag;
    /** 与关于页一致的窄宽度两端对齐样式（两端对齐） */
    compact?: boolean;
  }>(),
  {
    tag: "h3",
    compact: false,
  },
);
</script>

<style scoped lang="scss">
.ls-section-title {
  margin: 0 0 12px;
  padding-bottom: 10px;
  border-bottom: 2px dashed rgba(var(--ls-theme-rgb), 0.38);
}

.ls-section-title__text {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
}

/* 关于页小节标题：固定宽度 + 汉字两端对齐 */
.ls-section-title--compact .ls-section-title__text {
  display: inline-block;
  width: 4em;
  padding-top: 6px;
  text-align: justify;
  text-align-last: justify;
  text-justify: inter-ideograph;
}

.ls-section-title--compact .ls-section-title__text::after {
  content: "";
  display: inline-block;
  width: 100%;
}
</style>

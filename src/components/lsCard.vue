<script setup lang="ts">

</script>

<template>
  <n-card class="card-container">
    <n-scrollbar
      class="card-scrollbar"
      trigger="none"
      :x-scrollable="false"
      :container-style="{ height: '100%' }"
      :content-style="{
        height: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }"
    >
      <slot></slot>
    </n-scrollbar>
  </n-card>
</template>

<style scoped lang="scss">
.card-container {
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  :deep(.n-card__content) {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
  }
}

.card-scrollbar {
  flex: 1;
  min-height: 0;
  height: 100%;
}
</style>

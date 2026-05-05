<script setup lang="ts">
import type { GlobalThemeOverrides } from "naive-ui";
import { NMessageProvider } from "naive-ui";
import lsLayout from "./components/lsLayout.vue";

const themeRgb = "32, 128, 240";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: `rgb(${themeRgb})`,
    primaryColorHover: "rgb(52, 148, 252)",
    primaryColorPressed: "rgb(22, 108, 216)",
    primaryColorSuppl: `rgb(${themeRgb})`,
  },
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <lsLayout />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>

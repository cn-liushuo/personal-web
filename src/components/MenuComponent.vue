<template>
  <n-split :default-size="0.8">
    <template #1>
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        responsive
        @update:value="handleMenuSelect"
      />
    </template>
  </n-split>
</template>

<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const router = useRouter();
const route = useRoute();

// 定义菜单选项类型 - 使用type而非interface来避免继承第三方库类型时的错误
type CustomMenuOption = Omit<MenuOption, "key" | "label"> & {
  key: string;
  label: string;
  props?: {
    routePath: string;
  };
};

// 根据路由配置生成菜单选项
const menuOptions = computed<CustomMenuOption[]>(() => {
  return router.options.routes
    .filter(
      (routeItem: RouteRecordRaw) =>
        routeItem.name &&
        routeItem.meta?.title &&
        !["login"].includes(String(routeItem.name)),
    )
    .map((routeItem: RouteRecordRaw) => ({
      key: String(routeItem.name),
      label: routeItem.meta?.title as string,
      props: {
        routePath: routeItem.path,
      },
    }));
});

// 根据当前路由设置激活的菜单项
const activeKey = computed({
  get: () => {
    return String(route.name || "");
  },
  set: (_val) => {
    // 这个 setter 不会被直接调用，但必须存在以支持双向绑定
  },
});

// 处理菜单项选择事件
const handleMenuSelect = (key: string, _item: any) => {
  const matchedRoute = router.options.routes.find(
    (r: RouteRecordRaw) => String(r.name) === key,
  );
  if (matchedRoute) {
    router.push(matchedRoute.path);
  }
};
</script>

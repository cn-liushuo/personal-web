<template>
  <div class="menu-centered">
    <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        responsive
        @update:value="handleMenuSelect"
    />
  </div>
</template>

<script setup lang="ts">
import type {MenuOption} from "naive-ui";
import {computed} from "vue";
import {useRouter, useRoute} from "vue-router";
import type {RouteRecordRaw} from "vue-router";

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
              routeItem.meta?.title
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

<style scoped lang="scss">
.menu-centered {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* 横向菜单根节点为 flex，居中菜单项 */
/* 横向菜单根节点为 flex，默认 flex-start；非 responsive 时直接居中 */
.menu-centered :deep(.n-menu.n-menu--horizontal:not(.n-menu--responsive)) {
  justify-content: center;
}

/*
 * responsive 模式下菜单项包在内部一层 flex（width:100%）里，
 * 必须对该层设置 justify-content 才能真正居中菜单项。
 */
.menu-centered :deep(.n-menu.n-menu--horizontal.n-menu--responsive .v-overflow) {
  justify-content: center;
}
</style>

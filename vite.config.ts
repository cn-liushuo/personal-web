import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { fileURLToPath, URL } from "node:url";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 自动导入配置，包括 Naive UI 组件
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
      dts: true, // 生成类型声明文件
      dirs: [
        "./src/composables", // 可以配置自动导入的自定义 composables
      ],
      vueTemplate: true, // 允许在模板中自动导入
    }),

    // 自动导入组件
    Components({
      resolvers: [NaiveUiResolver()],
      dts: true, // 生成组件类型声明
    }),

    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

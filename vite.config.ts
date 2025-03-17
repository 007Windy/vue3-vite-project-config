import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

/** 自动导入插件 */
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  // 配置src目录别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
});

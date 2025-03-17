import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置src目录别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"./src") // 相对路径别名配置，使用 @ 代替 src
    }
  }
});

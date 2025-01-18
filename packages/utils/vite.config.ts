// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // 模块的入口文件
      name: "utils", // 你希望导出的模块名称
      fileName: (format) => `utils.${format}.js`, // 输出文件名格式
    },
  },
});

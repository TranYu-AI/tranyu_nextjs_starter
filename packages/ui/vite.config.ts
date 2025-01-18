import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/components/index.tsx", // 模块的入口文件
      name: "ui", // 你希望导出的模块名称
      fileName: (format) => `ui.${format}.js`, // 输出文件名格式
    },
    rollupOptions: {
      // 确保 external 将 React 和 React DOM 排除在外
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

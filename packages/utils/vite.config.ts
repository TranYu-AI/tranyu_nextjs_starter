// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',  // 模块的入口文件
      name: 'utils',  // 你希望导出的模块名称
      fileName: (format) => `utils.${format}.js`,  // 输出文件名格式
    },
    rollupOptions: {
      // 确保外部依赖不被打包
      external: ['react'],  // 如果你的 utils 依赖于 React，类似的外部依赖可以放在这里
      output: {
        // 设置全局变量（如 UMD 格式的情况下）
        globals: {
          react: 'React',
        },
      },
    },
  },
});

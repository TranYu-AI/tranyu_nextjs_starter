import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',  // 模块的入口文件
      name: 'utils',  // 你希望导出的模块名称
      fileName: (format) => `ui.${format}.js`,  // 输出文件名格式
    },
  },
})

// webpack.config.ts
// 使用 TypeScript 编写的 Webpack 配置文件，需要在运行时借助 ts-node 或其他方式支持

import path from 'path'; // Node.js 内置模块，用于处理文件和目录的路径
import type { Configuration } from 'webpack'; // 引入 Webpack 的类型，帮助在 TS 中获得智能提示与类型检查

/**
 * Webpack 配置对象
 */
const config: Configuration = {
  // 指定打包模式，可选 'development', 'production', 'none'
  mode: 'production',

  // 入口文件，告诉 Webpack 从哪开始构建依赖图
  entry: './src/index.ts',

  // 输出配置，指定打包后文件的名称及存放路径
  output: {
    // 打包后的文件名
    filename: 'bundle.js',
    // 指定输出目录，必须使用绝对路径，因此使用 path.resolve
    path: path.resolve(__dirname, 'dist')
  },

  // 模块配置，指定文件的处理规则（loaders）
  module: {
    rules: [
      {
        // 正则匹配所有 .css 结尾的文件
        test: /\.css$/i,
        // 使用 style-loader 和 css-loader 加载与解析 CSS
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

export default config;
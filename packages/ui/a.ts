{
  "compilerOptions": {
    // 指定编译生成的目标 JavaScript 版本，这里使用 ESNext，表示生成最新的 ECMAScript 版本代码
    "target": "ESNext",
    // 指定要包含在编译中基础库声明文件的列表：
    // "dom" 表示包含 DOM API
    // "dom.iterable" 表示包含可迭代的 DOM API（如 NodeList、HTMLCollection 等）
    // "esnext" 表示包含最新 ECMAScript 语言特性的定义
    "lib": ["dom", "dom.iterable", "esnext"],
    // 指定生成的模块系统为 ESNext（如 ESM）
    "module": "ESNext",
    // 跳过第三方库声明文件的类型检查，可以显著加快编译速度，但可能隐藏一些类型问题
    "skipLibCheck": false,
    // ES2022 引入的新标准，Object.defineProperty 来定义类字段，设置为 true，TypeScript 会生成符合 ES2022标准的代码
    "useDefineForClassFields": true,
    // 允许 TypeScript 编译器编译 .js 文件（通常只编译 .ts/.tsx，但在渐进迁移或混合项目时会用到）
    "allowJs": false,
    // 设置模块解析策略为 'bundler'，通常在使用打包工具（Webpack、Rollup、Vite 等）时会用到
    "moduleResolution": "bundler",
    // 启用隔离模块，保证每个文件都可以单独编译，避免跨文件的隐式依赖
    "isolatedModules": true,
    // 指定 JSX 代码如何被处理：
    // "preserve" 表示保留 JSX 语法到输出，通常供后续的 Babel 或其他工具进行处理
    "jsx": "preserve",
    // "jsx": "react-jsx",  // 使用新的JSX转换方式，适用于React 17+版本
    // 设置是否生成编译输出文件：
    // 当值为 false 时，编译器会输出转译后的文件到 outDir 指定文件夹
    // 当值为 true 时，编译器只进行类型检查而不输出文件
    // "noEmit": false,
    "noEmit": true,
    "allowImportingTsExtensions": true,
    
    // 启用所有严格类型检查选项的总开关，比如 strictNullChecks、noImplicitAny 等
    "strict": true,

    "outDir": "dist",     // 编译输出文件的目标目录
    "noUnusedLocals": true,  // 不允许存在未使用的局部变量
    "noUnusedParameters": true,  // 不允许存在未使用的函数参数
    "esModuleInterop": true,     // 启用 ES 模块的互操作性，以兼容 commonjs 等不同模块系统的导入/导出方式
    "resolveJsonModule": true, // 允许在 TypeScript 中导入 JSON 文件（需要 JSON 模块声明）
    "incremental": true,    // 启用增量编译，会在下次编译时加快编译速度（会生成 .tsbuildinfo 文件）

    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",      // 指定存储TypeScript构建信息的文件路径
    "paths": { // paths 用于设置路径别名。例如:
      "@/*": ["./*"] // "@/*": ["./*"] 表示在引入模块时，"@/xxx" 会被解析为当前根目录下 "./xxx"
    },
    "moduleDetection": "force",  // 强制将所有文件作为模块处理
    "noFallthroughCasesInSwitch": true,  // 防止在switch语句中存在fallthrough情况
    "noUncheckedSideEffectImports": true,  // 防止导入可能导致副作用的模块

  },

  // 指定编译器需要包含的文件或目录，这里只包含 src 目录及其子目录
  "include": ["src"],
}




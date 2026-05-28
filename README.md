# personal-web

刘铄的个人主页：展示简介、技术栈、工作经历、项目成果与个人信息。基于 Vue 3 + TypeScript + Vite 构建，使用 Naive UI 作为组件库，部署于 GitHub Pages。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

- **仓库**：[github.com/cn-liushuo/personal-web](https://github.com/cn-liushuo/personal-web)
- **在线访问**：[cn-liushuo.github.io/personal-web](https://cn-liushuo.github.io/personal-web/)（Hash 路由，路径形如 `/#/home`）

## 功能概览

| 路由 | 页面 | 说明 |
|------|------|------|
| `/home` | 首页 | 个人简介与方向说明 |
| `/tech` | 技术 | 按领域分组的技能熟练度（`lsSkillItem` 进度条） |
| `/work` | 工作 | 工作经历；桌面端表格、移动端卡片 |
| `/projects` | 项目 | 项目卡片网格，按开始时间倒序；移动端点击提示、桌面端可跳转外链 |
| `/about` | 关于 | 教育、培训、资格等信息；含证书图片预览 |

顶部菜单由路由 `meta.title` 自动生成；整体布局为顶栏 + 内容卡片 + 页脚。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3（`<script setup>`）、Vue Router 5 |
| 语言 | TypeScript |
| 构建 | Vite 7 |
| UI | Naive UI、Sass（`sass-embedded`） |
| 工具 | `unplugin-auto-import`、`unplugin-vue-components`（Naive UI 按需解析） |
| 其他 | dayjs、Pinia（已安装，可按需扩展） |
| 运行时 | Node.js 20.20.2（[Volta](https://volta.sh/) 锁定，见 `package.json`） |

## 项目结构

```
personal-web/
├── .github/workflows/     # GitHub Actions（Pages 部署）
├── src/
│   ├── components/        # 以 ls 前缀的公共组件（路径大小写须与磁盘一致）
│   ├── data/              # 页面 JSON 数据源
│   │   ├── aboutData.json
│   │   ├── projectsData.json
│   │   └── workData.json
│   ├── router/            # 路由（Hash 模式）
│   ├── utils/             # 工具（如图片预览工具栏）
│   ├── views/             # 页面视图
│   ├── App.vue            # 根组件与主题色配置
│   └── main.ts
├── vite.config.ts         # 别名、自动导入、生产环境 base 路径
├── GIT_WORKFLOW.md        # Git 分支协作说明
└── package.json
```

### 公共组件（`src/components/`）

组件文件名统一为**小写 `ls` 前缀**，import 使用 `@/components/lsXxx.vue`：

| 组件 | 用途 |
|------|------|
| `lsLayout.vue` | 顶栏 / 内容区 / 页脚整体布局 |
| `lsMenu.vue` | 水平导航菜单 |
| `lsCard.vue` / `lsCardBody.vue` | 内容区卡片容器 |
| `lsPageTitle.vue` / `lsSectionTitle.vue` | 页面与区块标题 |
| `lsTable.vue` | 表格展示 |
| `lsSkillItem.vue` | 技能名称 + 熟练度进度 |
| `lsProjectCard.vue` | 项目卡片与点击交互 |

## 本地开发

### 环境要求

- Node.js **20.x**（推荐安装 [Volta](https://volta.sh/)，仓库已配置 `volta.node`）
- npm

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/cn-liushuo/personal-web.git
cd personal-web

# 安装依赖
npm install

# 开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建（含 vue-tsc 类型检查）
npm run build

# 本地预览构建产物
npm run preview
```

开发环境下 `vite.config.ts` 的 `base` 为 `/`；生产构建为 `/personal-web/`，与 GitHub Pages 子路径一致。

### 修改页面内容

多数文案与列表数据在 JSON 中维护，改完后保存即可在开发服务器中热更新：

- **关于页**：`src/data/aboutData.json`
- **工作页**：`src/data/workData.json`
- **项目页**：`src/data/projectsData.json`
- **技术栈熟练度**：`src/views/TechStackView.vue` 中的 `lsSkillItem` 配置
- **首页简介**：`src/views/HomeView.vue`

路由与菜单标题：编辑 `src/router/index.ts` 中的 `path`、`name`、`meta.title`。

### 自动导入说明

Vite 插件会在开发/构建时生成 `auto-imports.d.ts`、`components.d.ts`（已加入 `.gitignore`）。Naive UI 组件与部分 API 无需手写 import 即可在 SFC 中使用。

## 部署

推送代码后，由 [`.github/workflows/jekyll-gh-pages.yml`](.github/workflows/jekyll-gh-pages.yml) 执行 `npm install` → `npm run build` → 将 `dist` 发布到 GitHub Pages。

**注意：**

1. 推送到 **`main` 分支** 时自动触发部署。
2. 仓库 Settings → Pages 需启用 **GitHub Actions** 作为 Source。
3. 站点使用 **Hash 路由**（`createWebHashHistory`），无需服务端重写规则。

更完整的分支协作流程见 [GIT_WORKFLOW.md](./GIT_WORKFLOW.md)。

## 提交规范

提交信息采用 [Conventional Commits](https://www.conventionalcommits.org/)，**中文描述**，例如：

```
feat(技术栈): 调整技能熟练度
fix(项目): 修复移动端卡片点击逻辑
```

## 修订记录

| 日期 | 说明 |
|------|------|
| 2026-05-28 | 新增 MIT 开源许可证（`LICENSE`） |
| 2026-05-28 | GitHub Actions 部署触发分支由 `master` 改为 `main` |
| 2026-05-28 | 重写 README：补充项目介绍、结构、开发与部署说明 |
| 2026-05-28 | 技术栈页：更新 Electron、React 系、Java/Spring Boot、Postman、Jenkins 等技能熟练度；`package.json` 增加 Volta 固定 Node 20.20.2 |

## 许可证

本项目采用 [MIT License](./LICENSE) 开源协议。

在保留版权声明与许可全文的前提下，你可以自由使用、修改、分发本仓库代码。详见根目录 `LICENSE` 文件。

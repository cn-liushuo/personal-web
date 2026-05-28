# Git 分支工作流程

## 分支说明

### develop 分支
- **用途**：开发分支，所有日常开发工作都在此分支进行
- **操作**：
  - 新功能开发从 develop 分支创建 feature 分支
  - 修复 bug 从 develop 分支创建 fix 分支
  - 开发完成后合并回 develop 分支

### main 分支
- **用途**：默认发布分支，保持稳定可发布状态；推送到此分支会触发 GitHub Pages 部署
- **操作**：
  - 仅接受从 develop 分支合并的代码（推荐）
  - 不接受随意直接提交（direct commit）
  - 每次合并代表一个可发布的版本

## 工作流程

```
feature/xxx  ──┐
               ├──►  develop  ──►  main
fix/xxx  ──────┘         ↑              ↑
                         │              │
                    (日常开发)      (仅合并发布)
```

## 常用命令

### 开始新功能开发
```bash
# 切换到 develop 分支并更新
git checkout develop
git pull origin develop

# 创建功能分支
git checkout -b feature/功能名称

# 开发完成后提交并推送
git add .
git commit -m "feat: 添加某某功能"
git push origin feature/功能名称

# 合并到 develop（通过 PR/MR 或本地合并）
git checkout develop
git merge feature/功能名称
git push origin develop
```

### 发布到 main
```bash
# 确保 develop 是最新的
git checkout develop
git pull origin develop

# 合并到 main
git checkout main
git merge develop
git push origin main

# 发布完成后回退到 develop 分支（继续开发）
git checkout develop
```

## 注意事项

1. **不要在 main 分支随意直接修改代码**（日常开发走 develop / feature）
2. **develop 分支应保持稳定**，通过功能分支进行开发
3. **提交信息使用 Conventional Commits 格式**
4. **定期将 develop 合并到 main 进行发布**（推送 main 会触发 Pages 部署）

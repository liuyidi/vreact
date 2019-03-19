# vreact
react

## Vreact功能点
- [ ] 支持render
- [ ] 支持state和props
- [ ] 支持组件
- [ ] 生命周期
- [ ] diff算法
- [ ] jsx语法

## 支持技术功能点
- 使用npmrc
- 使用gitignore
- 使用editorconfig 编辑器配置
- 支持git precommit执行lint检查
- 配置默认git commit模版
- 检测commit格式和信息
- 生成Change Log版本信息
- 使用rollup配合babel编译打包
- 使用http-server展示examples
- 支持prettier约束代码风格

## 用到的npm包

- npm-run-all 同时执行多个npm命令
- husky   git钩子
- lint-staged lint检查钩子
- commitlint  校验git commit message是否符合规范
- commitizen  git提交信息格式化
- cz-customizable/cz-conventional-changelog／cz-jira-smart-commit
- standard-version   生成Change Log版本
- eslint  代码检查
- prettier 代码格式化
- rimraf 删除功能
- cross-env 跨平台
- babel 代码转码工具
  - @babel/core
  - @babel/preset-env
- rollup 打包工具
# vreact
react

## 支持功能点
- 使用npmrc
- 使用gitignore
- 使用editorconfig 编辑器配置
- 支持git precommit执行lint检查
- 配置默认git commit模版
- 检测commit格式和信息
- 生成Change Log版本信息

## 用到的npm包

- npm-run-all 同时执行多个npm命令
- husky   git钩子
- lint-staged lint检查钩子
- commitlint  校验git commit message是否符合规范
- commitizen  git提交信息格式化
- cz-conventional-changelog 
- standard-version   生成Change Log版本
- eslint  代码检查
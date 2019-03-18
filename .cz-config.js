'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     功能新增'},
    {value: 'fix',      name: 'fix:      bug修复'},
    {value: 'docs',     name: 'docs:     文档修改'},
    {value: 'style',    name: 'style:    代码格式修改\n            (white-space, formatting, missing semi-colons, etc)'},
    {value: 'refactor', name: 'refactor: 代码重构'},
    {value: 'perf',     name: 'perf:     性能优化改进'},
    {value: 'test',     name: 'test:     添加测试用例'},
    {value: 'chore',    name: 'chore:    构建过程或者辅助的工具改变'},
    {value: 'revert',   name: 'revert:   撤销某个commit提交'},
    {value: 'WIP',      name: 'WIP:      Work in progress'}
  ],

  scopes: [
    {name: 'accounts'},
    {name: 'admin'},
    {name: 'exampleScope'},
    {name: 'changeMe'}
  ],

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']

};
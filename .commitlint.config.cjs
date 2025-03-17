module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新特性、新功能
        'fix', // 修复 bug
        'docs', // 文档
        'style', // 代码格式修改，不是 css 修改
        'refactor', // 代码重构
        'perf', // 优化相关，提升性能、优化体验等
        'test', // 增加测试用例或更新现有测试
        'chore', // 构建过程或辅助工具的变动，如依赖更新、脚手架配置修改等
        'revert', // 回滚到上一个版本
        'build' // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
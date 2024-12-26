import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
  // 自定义规则
  rules: {
    // 禁用Vue组件命名规则（具体规则名称可能因eslint-plugin-vue版本而异）
    'vue/multi-word-component-names': '0', // 允许单字组件名
    // 其他自定义规则...
  },
  }
 ,
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],


]

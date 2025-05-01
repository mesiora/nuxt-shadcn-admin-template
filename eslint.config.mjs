// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: ['app/components/ui/**/*'],
  },
]).overrideRules({
  'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
})

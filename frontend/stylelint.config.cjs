// frontend/stylelint.config.cjs
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss', // Tailwind 用設定
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'responsive',
          'screen',
          'variants',
          'theme',
        ],
      },
    ],
  },

};

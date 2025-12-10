// frontend/.storybook/main.ts
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)', // ← frontend を外す
  ],
  core: { builder: '@storybook/builder-vite' },
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-designs',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@app': '/src/app',
          '@base': '/src/base',
          '@case': '/src/case',
          '@domain': '/src/domain',
          '@shared': '/src/shared',
          '@styles': '/src/styles',
          '@app-types': '/src/types',
        },
      },
    });
  },
};

export default config;

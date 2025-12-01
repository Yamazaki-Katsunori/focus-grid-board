import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@base': '/src/base',
      '@case': '/src/case',
      '@domain': '/src/domain',
      '@shared': '/src/shared',
      '@styles': '/src/styles',
      '@app-types': '/src/types',
    },
  },

  server: {
    host: true,

    port: 5173,
    strictPort: true,

    proxy: {
      '/api': {
        target: 'http://nginx',
        changeOrigin: true,
      },
    },
  },
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// Use the path module to ensure correct file paths
import path from 'path';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Set the base path to your repository name
    base: '/Pomodoro-vue/',
    // Configure CSS extraction
    cssCodeSplit: true,
  },
});

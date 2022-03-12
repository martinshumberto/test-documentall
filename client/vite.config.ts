import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import reactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.tsx'),
      formats: ['es', 'cjs'],
      name: 'report-ui-component',
    },
  },
  plugins: [reactJsx(), react()],
});

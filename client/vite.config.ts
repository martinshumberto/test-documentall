import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  server: {
    port: parseInt(process.env.PORT) || 3000,
    host: '0.0.0.0',
  },
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment',
  // },
  // root: resolve(__dirname),
  // build: {
  //   outDir: resolve(__dirname, 'dist'),
  //   lib: {
  //     entry: resolve(__dirname, 'main.tsx'),
  //     formats: ['es', 'cjs'],
  //     name: 'TruePhoneClient',
  //     fileName: (format) => `true-phone-client.${format}.js`,
  //   },
  // },
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
});

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
      layouts: path.resolve(__dirname, './src/layouts'),
      pages: path.resolve(__dirname, './src/pages'),
      slices: path.resolve(__dirname, './src/store/slices'),
      images: path.resolve(__dirname, './src/assets/images'),
    },
  },
  plugins: [react(), tsconfigPaths(), svgr()],
  test: {
      globals: true,
      environment: 'jsdom',
    }
  ,
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        assetFileNames(assetInfo) {
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
});
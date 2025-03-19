import path from 'node:path';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      strictPort: true,
    },
    plugins: [
      react(),
      svgrPlugin(),
      checker({
        typescript: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    build: {
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});

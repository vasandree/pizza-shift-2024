import react from '@vitejs/plugin-react';
import path from 'node:path';
import url from 'node:url';
import { defineConfig } from 'vite';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@consts': path.resolve(__dirname, './src/utils/consts'),
      '@api': path.resolve(__dirname, './src/utils/api'),
      '@hooks': path.resolve(__dirname, './src/utils/hooks'),
      '@types': path.resolve(__dirname, './src/utils/types'),
      '@helpers': path.resolve(__dirname, './src/utils/helpers'),
      '@ui': path.resolve(__dirname, './src/components/uiKit'),
      '@components': path.resolve(__dirname, './src/components/systemComponents')
    }
  },
  plugins: [react()]
});

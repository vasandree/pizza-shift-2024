import react from '@vitejs/plugin-react';
import path from 'node:path';
import url from 'node:url';
import { defineConfig } from 'vite';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@consts': path.resolve(dirname, './src/utils/consts'),
      '@api': path.resolve(dirname, './src/utils/api'),
      '@hooks': path.resolve(dirname, './src/utils/hooks'),
      '@helpers': path.resolve(dirname, './src/utils/helpers'),
      '@ui': path.resolve(dirname, './src/components/uiKit'),
      '@components': path.resolve(dirname, './src/components/systemComponents')
    }
  },
  plugins: [react()]
});

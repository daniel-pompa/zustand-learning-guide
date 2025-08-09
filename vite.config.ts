import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@data', replacement: path.resolve(__dirname, './src/data') },
      { find: '@interfaces', replacement: path.resolve(__dirname, './src/interfaces') },
      { find: '@layouts', replacement: path.resolve(__dirname, './src/layouts') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@router', replacement: path.resolve(__dirname, './src/router') },
      { find: '@stores', replacement: path.resolve(__dirname, './src/stores') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },

      // Aliases with wildcard
      {
        find: /^@components\/(.*)/,
        replacement: path.resolve(__dirname, './src/components/$1'),
      },
      {
        find: /^@interfaces\/(.*)/,
        replacement: path.resolve(__dirname, './src/interfaces/$1'),
      },
      {
        find: /^@layouts\/(.*)/,
        replacement: path.resolve(__dirname, './src/layouts/$1'),
      },
      { find: /^@pages\/(.*)/, replacement: path.resolve(__dirname, './src/pages/$1') },
      { find: /^@stores\/(.*)/, replacement: path.resolve(__dirname, './src/stores/$1') },
      { find: /^@utils\/(.*)/, replacement: path.resolve(__dirname, './src/utils/$1') },
      { find: /^@hooks\/(.*)/, replacement: path.resolve(__dirname, './src/hooks/$1') },
    ],
  },
});

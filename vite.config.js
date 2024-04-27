import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { VitePluginGhPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    VitePWA(),
    VitePluginGhPages({
      // Additional configuration options here if needed
    }),
  ],
});
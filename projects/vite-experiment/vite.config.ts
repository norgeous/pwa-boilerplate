import { defineConfig } from 'vite';
import viteConfig from '@pwa/vite-config/vite.config';
import manifestDestiny from '@pwa/vite-config/manifestDestiny';
import projectConfig from './project.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...viteConfig,
  plugins: [...viteConfig.plugins, manifestDestiny(projectConfig)],
});

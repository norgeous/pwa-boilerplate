import { defineConfig } from 'vite';
import defaultViteConfig from '@pwa/vite-config/vite.config';
import manifestDestiny from '@pwa/vite-config/manifestDestiny';
import projectConfig from './project.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...defaultViteConfig,
  plugins: [...defaultViteConfig.plugins, manifestDestiny(projectConfig)],
});

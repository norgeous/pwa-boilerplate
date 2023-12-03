import { defineConfig } from 'vite';
import defaultViteConfig from '@pwa/vite-config/default-config';
import plugins from '@pwa/vite-config/plugins';
import manifestDestiny from '@pwa/vite-config/manifestDestiny';
import projectConfig from './project.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...defaultViteConfig,
  plugins: [...plugins, manifestDestiny(projectConfig)],
});

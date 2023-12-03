import { defineConfig } from 'vite';
import viteConfig from '@pwa/vite-config/vite.config';
import manifestDestiny, {
  projectConfig1,
} from '@pwa/vite-config/manifestDestiny';

// https://vitejs.dev/config/
export default defineConfig({
  ...viteConfig,
  plugins: [...viteConfig.plugins, manifestDestiny(projectConfig1)],
});

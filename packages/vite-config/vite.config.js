import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // make index.html urls relative for deployment to GH pages
  plugins: [basicSsl(), react()],
});

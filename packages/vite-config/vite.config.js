import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [basicSsl(), react()],
  esbuild: {
    // loader: 'tsx', // OR "jsx"
    // include: [
    //   './**/*.js',
    //   // "node_modules/**/*.js",
    //   './**/*.ts',
    //   // "node_modules/**/*.ts",
    // ],
    // loader: { '.js': 'jsx' },
  },
});

import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), ''); // Not strictly needed if using import.meta.env, but useful if we needed options access here. 
  // We will let proper Vite env handling take over in the app.

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.'),
      }
    }
  };
});

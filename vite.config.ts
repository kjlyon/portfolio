import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  assetsInclude: ['**/*.jpg', '**/*.png','**/*.jpeg'], 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

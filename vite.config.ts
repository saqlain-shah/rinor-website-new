import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    host: true, // Allow external access
    port: 4173, // Required for vite preview
    allowedHosts: ['rinor.pk', 'www.rinor.pk', '147.93.94.137'], // Add domain and IP
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  publicDir: 'public',
});

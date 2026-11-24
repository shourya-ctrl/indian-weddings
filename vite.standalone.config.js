// Single-file build: one JS bundle and one stylesheet, which
// scripts/standalone.mjs inlines into a self-contained .html that opens on the
// page named by VITE_START_PATH (see router.jsx).
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-standalone',
    emptyOutDir: true,
    cssCodeSplit: false,
    modulePreload: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});

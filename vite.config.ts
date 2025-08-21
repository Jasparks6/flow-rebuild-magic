import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Single file bundle configuration
    cssCodeSplit: false, // Inline all CSS into JS
    assetsInlineLimit: 100000000, // Inline all assets as data URLs (100MB limit)
    rollupOptions: {
      output: {
        // Generate single JS bundle
        inlineDynamicImports: true,
        manualChunks: undefined,
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Optimize for single file
    minify: 'terser',
    sourcemap: false,
    target: 'es2015'
  }
}));

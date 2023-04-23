import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      fileName: (format, entryAlias) => `${entryAlias.replace(/^src\//, '')}.${format}.js`,
      formats: [ 'es', 'cjs' ],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        inlineDynamicImports: false,
      },
    },
  },
  plugins: [ dts() ],
});

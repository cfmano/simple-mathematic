import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import biome from 'vite-plugin-biome';

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
  plugins: [
    biome({
      files: 'src'
    }),
    dts(),
  ],
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      include: [ 'src/**/*' ],
    }
  },
});

import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikNxVite } from 'qwik-nx/plugins';

export default defineConfig({
  cacheDir: '../node_modules/.vite/./qwik-react-demo-app',
  plugins: [
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../dist/./qwik-react-demo-app/client',
      },
      ssr: {
        outDir: '../dist/./qwik-react-demo-app/server',
      },
    }),
    tsconfigPaths({ root: '../' }),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});

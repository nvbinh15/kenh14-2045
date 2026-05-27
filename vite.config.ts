import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        // We parse content/articles/*.mdx as raw text ourselves at build/dev
        // time, so constrain MDX compilation to src/.
        include: ['src/**/*.{md,mdx}'],
      }),
    },
    react(),
  ],
  assetsInclude: ['**/*.mdx'],
  server: {
    fs: {
      // Allow serving files from outside the project root (content/ at repo root)
      allow: ['..', '.'],
    },
  },
})

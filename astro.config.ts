import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'astro/config';

// import node from '@astrojs/node';

import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daks.dev',

  trailingSlash: 'never',

  outDir: 'build',

  // output: 'server',
  // adapter: node({ mode: 'standalone' }),

  // redirects: { '/old': '/new', '/old/[...slug]': '/new/[...slug]' }

  vite: {
    logLevel: 'info',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        $lib: fileURLToPath(new URL('./src/lib', import.meta.url))
      }
    }
    // plugins: []
    // define: { 'process.env': process.env }
  },

  scopedStyleStrategy: 'where',

  integrations: [
    svelte({
      include: ['**/svelte/**']
    }),
    tailwind(),
    mdx(),
    prefetch({
      throttle: 3
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    compress({
      Logger: 1
    })
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});

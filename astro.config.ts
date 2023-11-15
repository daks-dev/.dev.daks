import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'astro/config';

import { VitePWA } from 'vite-plugin-pwa';

// import node from '@astrojs/node';

import compress from 'astro-compress';
import mdx from '@astrojs/mdx';
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

  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: false
  },

  vite: {
    logLevel: 'info',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        $lib: fileURLToPath(new URL('./src/lib', import.meta.url))
      }
    },
    // server: { fs: { strict: false } },
    // build: { target: 'esnext' },
    plugins: [
      VitePWA({
        // registerType: 'autoUpdate',
        workbox: {
          // globDirectory: 'build',
          // globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,avif,woff,woff2,ttf,eot,ico}'],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          // navigateFallback: null
        },
        devOptions: {
          // enabled: true
        }
      })
    ]
    // define: { 'process.env': process.env }
  },

  scopedStyleStrategy: 'where',

  integrations: [
    svelte({
      include: ['**/svelte/**']
    }),
    tailwind(),
    mdx(),
    /* @ts-ignore */
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    /* @ts-ignore */
    compress({
      Image: false,
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

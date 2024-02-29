import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});

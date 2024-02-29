import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import vercel from '@astrojs/vercel/serverless';
// Import Vercel Analytics adapter

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()], // Keep existing integrations
  output: 'server', // Ensure output is set to 'server' for Vercel deployment
  adapter: vercel({
    // Add Vercel adapter configuration
    webAnalytics: { enabled: true }, // Enable Vercel Analytics
  }),
});

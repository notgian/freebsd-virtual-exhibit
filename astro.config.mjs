import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx(), react(), icon()],
  site: 'https://notgian.github.io',
  base: 'virtual-exhibit',

  vite: {
    plugins: [tailwindcss()],
  },
});

/**
 * @module astro.config.mjs
 * @description Astro project configuration file.
 * Github Pages needs, Tailwind integration and code rutes helps.
 * @author Astro project & Ismael Plaza
 */

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages needs.
  output: 'static', // Static Site Generation output. 
  site: 'https://IsmaelPlaza.github.io', // Personal base URL.
  base: '/', // Prefix for repository.
  
  vite: {
    resolve: {alias: {'@': '/src',},}, // Directory shortcut.
    plugins: [tailwindcss()]
  }
});
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isProductionBuild = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://raduandreigorcea.github.io',
  base: isProductionBuild ? '/raduandreigorcea/' : '/',
});
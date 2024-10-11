import playformCompress from '@playform/compress'
import playformInline from '@playform/inline'
import purgecss from 'astro-purgecss'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), playformInline(), playformCompress(), sitemap()],
  site: 'https://timothybrits.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  }
})

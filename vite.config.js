import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
      // Suporte a rotas dinâmicas tipo [id].vue ou [[optional]].vue
      routeStyle: 'file',
      // Importar dinamicamente (lazy load)
      importMode: 'async',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

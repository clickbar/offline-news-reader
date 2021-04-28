import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  VitePWA({
    srcDir: 'src',
    filename: 'sw.js',
    strategies: 'injectManifest',
    manifest: {
      name: 'Offline News Reader',
      short_name: 'Offline News Reader',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      lang: 'de',
      scope: '/',
      icons: [
        {
          "src": "/android-icon-192x192-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "/apple-icon-180x180-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "180x180"
        },
        {
          "src": "/apple-icon-152x152-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "152x152"
        },
        {
          "src": "/apple-icon-144x144-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "144x144"
        },
        {
          "src": "/apple-icon-120x120-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "120x120"
        },
        {
          "src": "/apple-icon-114x114-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "114x114"
        },
        {
          "src": "/favicon-96x96-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "96x96"
        },
        {
          "src": "/apple-icon-76x76-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "76x76"
        },
        {
          "src": "/apple-icon-72x72-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "72x72"
        },
        {
          "src": "/apple-icon-60x60-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "60x60"
        },
        {
          "src": "/apple-icon-57x57-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "57x57"
        },
        {
          "src": "/favicon-32x32-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "32x32"
        },
        {
          "src": "/favicon-16x16-dunplab-manifest-40227.png",
          "type": "image/png",
          "sizes": "16x16"
        }
      ]
    }
  })]
})

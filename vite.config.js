import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [react() , tailwindcss() ,
      VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Saksham vidya',
        short_name: 'Saksham vidya',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [
          { src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4e/52/4f/4e524f93-bec9-d733-fd8f-c5b33cf0a81a/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/1200x600wa.png', sizes: '192x192', type: 'image/png' },
          { src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4e/52/4f/4e524f93-bec9-d733-fd8f-c5b33cf0a81a/AppIcon-0-0-1x_U007emarketing-0-6-0-85-220.png/1200x600wa.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
})

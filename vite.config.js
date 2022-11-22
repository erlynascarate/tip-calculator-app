import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            injectRegister: 'inline',
            includeAssets: [
                'favicon.ico',
                'favicon-32x32.png',
                'favicon-16x16.png',
                'apple-touch-icon.png',
            ],
            manifest: {
                name: 'SPLITTER: Tip Calculator',
                short_name: 'SPLITTER',
                description:
                    'A tip calculator\n\nAhorros iconos creados por Freepik - Flaticon\nhttps://www.flaticon.es/iconos-gratis/ahorros',
                theme_color: '#c5e4e7',
                background_color: '#c5e4e7',
                orientation: 'portrait',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'maskable_icon_x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {
                        src: 'maskable_icon_x1024.png',
                        sizes: '1024x1024',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
                screenshots: [
                    {
                        src: 'screenshot.png',
                        sizes: '850x1860',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
})

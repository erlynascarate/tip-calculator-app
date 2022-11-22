import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const description = `Calculate in a matter of seconds how much you have to tip and the total cost of the bill per person.
    
Savings icon created by Freepik - Flaticon
https://www.flaticon.com/free-icons/savings`

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
                'screenshot.png',
            ],
            manifest: {
                name: 'SPLITTER: Tip Calculator',
                short_name: 'Tip Calculator',
                description,
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
                        platform: 'narrow',
                        label: 'Tip calculator being used',
                    },
                ],
            },
        }),
    ],
})

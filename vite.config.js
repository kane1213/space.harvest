import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      VitePWA({
        manifest: {
          name: 'Space Harvest',
          short_name: 'S.Harvest',
          description: 'A simple game made with Vue 3 and Vite.',
          theme_color: '#ffffff',
          icons: [100, 125, 150, 200, 400].map((size) => ({
            src: `/public/icons/icon-${size}.png`,
            size: `${size}x${size}`,
            type: 'image/png',
          })),
        },
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}'], // .{js,css,html}', '**/*.{jpg,jpeg,png,gif}
          runtimeCaching: [
            {
              urlPattern: (data) => data.url.pathname.startsWith('/'),
              handler: 'CacheFirst',
              options: {
                cacheName: 'kane-cache',
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    define: {
      EnvMode: JSON.stringify(mode),
    },
    base: process.env.NODE_ENV === 'production' ? '/space.harvest/' : './',
  })
}

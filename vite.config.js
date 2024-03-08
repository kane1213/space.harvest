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
          name: 'Space Harvest2',
          short_name: 'S.Harvest2',
          description: 'A simple game made with Vue 3 and Vite.',
          theme_color: '#ffffff',
          // icons: [100, 125, 150, 200, 400].map((size) => ({
          //   src: `/public/icons/icon-${size}.png`,
          //   size: `${size}x${size}`,
          //   type: 'image/png',
          // })),
          icons: [
            {
              src: '/space.harvest/icons/icon-100.png',
              type: 'image/png',
              sizes: '100x100',
            },
            {
              src: '/space.harvest/icons/icon-125.png',
              type: 'image/png',
              sizes: '125x125',
            },
            {
              src: '/space.harvest/icons/icon-150.png',
              type: 'image/png',
              sizes: '150x150',
            },
            {
              src: '/space.harvest/icons/icon-200.png',
              type: 'image/png',
              sizes: '200x200',
            },
            {
              src: '/space.harvest/icons/icon-400.png',
              type: 'image/png',
              sizes: '400x400',
            },
          ],
        },
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'], // .{js,css,html}', '**/*.{jpg,jpeg,png,gif}
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

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(mode)
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    define: {
      'import.meta.mode': JSON.stringify(mode),
    },
    base: process.env.NODE_ENV === 'production' ? '/space.harvest/' : './',
  })
}

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegisteredSW(swUrl, r) {
    r &&
      setInterval(async () => {
        // 检查更新，如果vite.config.ts配置为autoUpdate，此操作将直接触发更新，并刷新页面激活更新
        await r.update()
      }, 30000)
  },
})
async function close() {
  console.log({ off: offlineReady.value, need: needRefresh.value })
  offlineReady.value = false
  needRefresh.value = false
}

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="text-2xl">HOME</div>
  <div class="message">
    <span v-if="offlineReady"> 应用已就绪 </span>
    <span v-else-if="needRefresh"> 新内容可用，点击重新加载按钮以更新。 </span>
  </div>
  <button
    class="mr-2 bg-blue-800 text-white px-2 rounded"
    @click="updateServiceWorker()"
  >
    重新加载
  </button>
  <button class="bg-blue-800 text-white px-2 rounded" @click="close">
    关闭
  </button>
</template>

<style scoped></style>

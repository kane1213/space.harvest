<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const items = ref([])
;(() => {
  const localAssets = localStorage.getItem('assets')
  console.log({ localAssets })
  if (!!localAssets) {
    const assetData = JSON.parse(localAssets)
    if (assetData.time + 1000 * 60 * 15 > new Date().getTime()) {
      items.value = assetData.items || []
      return
    }
  }

  fetch(
    'https://script.googleusercontent.com/macros/echo?user_content_key=-zYQl_6EDXSJVYvTALQbDS5uCewwRbRNyLWxVcYMGKCG8lUZ0BVexmL9HIfX56gLl9S6d1BmT9GWFTmNyPUm7SKY5zKOGO4um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ21HpSMLx3kh-lC6CykUxf-VObydmhP-tAqRNBteJ0xos7RQBZiawpBV1AfldrqgAtF74CfwaLmPBK_Bh0gwMF0qX_qbWVp4w&lib=MT6UTPjUkbaqHdC35MvA4Qr5SQpxNkJR0'
  )
    .then((res) => res.json())
    .then((res: any) => {
      console.log({ res })
      localStorage.setItem(
        'assets',
        JSON.stringify({ items: res?.items, time: new Date().getTime() })
      )
      items.value = res?.items || []
    })
})()
</script>

<template>
  <div class="text-2xl">ASSETS</div>
  <div v-for="item in items" :key="item.name">
    <div>{{ item.name }}</div>
    <div>{{ item.type }}</div>
    <div>{{ item.time }}</div>
    <div>{{ item.money }}</div>
    <div>{{ item.paytime }}</div>
  </div>
</template>

<style scoped></style>

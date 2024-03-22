<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'
import axios from 'axios'

const _url = ''

const items = ref([])
;(() => {
  const localAssets = localStorage.getItem('assets')
  if (!!localAssets) {
    const assetData = JSON.parse(localAssets)
    if (assetData.time + 1000 * 60 * 15 > new Date().getTime()) {
      items.value = assetData.items || []
      items.value.push({
        id: 0,
        name: '',
        time: dayjs().toDate(),
        type: 1,
        money: 0,
        paytime: dayjs().toDate(),
      })
      return
    }
  }

  axios.get(_url).then((res: any) => {
    console.log(res)
    const _items = res.data.items
    localStorage.setItem(
      'assets',
      JSON.stringify({ items: _items, time: new Date().getTime() })
    )
    items.value = _items || []
  })
})()

const apiInstance = axios.create({
  // baseURL: import.meta.env.VITE_APIURL + '/Admin/OrderPost',
  // baseURL: _url,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': '*',
    // 'Content-Type': '*',
    'Content-Type': 'multipart/form-data',
  },
  timeout: 16000,
})

function modifyItem(item: any) {
  const bodyFormData = new FormData()
  Object.keys(item).forEach((key) => {
    bodyFormData.append(key, item[key])
  })
  if (item.id === 0) {
    apiInstance.post(_url, bodyFormData).then((res) => {
      console.log({ res })
    })
    return
  }
  apiInstance.patch(_url, bodyFormData).then((res) => {
    console.log({ res })
  })
}
</script>

<template>
  <div class="text-2xl">ASSETS</div>

  <div class="table-grid bg-blue-800 text-white">
    <div>ID</div>
    <div>NAME</div>
    <div>TYPE</div>
    <div>TIME</div>
    <div>MONEY</div>
    <!-- 金额 -->
    <div>PAYTIME</div>
    <!-- 支付时间 -->
    <div>EDIT</div>
  </div>

  <div
    v-for="item in items"
    :key="item.id"
    class="table-grid border-b-[1px] last:border-b-0 content"
  >
    <div>{{ item.id }}</div>
    <div><input type="text" v-model="item.name" class="border p-1" /></div>
    <div>
      <select v-model="item.type" class="border p-1">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
    </div>
    <div>{{ dayjs(item.time).format('YYYY-MM-DD HH:mm:ss') }}</div>
    <div>{{ item.money }}</div>
    <div>{{ dayjs(item.paytime).format('YYYY-MM-DD HH:mm:ss') }}</div>
    <div><button @click="modifyItem(item)">CONFIRM</button></div>
  </div>
</template>

<style scoped>
.table-grid {
  @apply grid grid-cols-7 gap-1 text-center py-1;
  &.content {
    > div {
      @apply flex justify-center items-center;
    }
  }
}
</style>

<script setup>
import Layout from '@/components/Layout.vue'
import { ref } from 'vue'
const openAddFlow = () => {
  // if (isIOS()) {
  //   // 如果是苹果手机，直接显示浏览器设置指引图
  //     showAddTipsDialog.value = true
  // } else {

  // }
  const showAddTipsDialog = ref(false)
  try {
    window.deferredPrompt.prompt()
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        // showAddToDesktop.value = false
        localStorage.setItem('addDesktop', true)
      } else {
        console.log('User dismissed the A2HS prompt')
      }
      window.deferredPrompt = null
    })
  } catch {
    showAddTipsDialog.value = true
  }
}
openAddFlow()
</script>

<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
// import { ref } from 'vue'
const images = new Array(100)
  .fill(1)
  .map(
    (num: number, index: number) =>
      `./images/harvestMoon/harvest-moon-snes-${(num + index + '').padStart(
        3,
        '0'
      )}.png`
  )
</script>

<template>
  <div class="grid gap-1 grid-cols-4">
    <div v-for="image in images" :key="image">
      <img class="rounded-lg" :src="image" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import router from '@/router'

function navgate(name: string) {
  router.push({ name })
}
</script>

<template>
  <div class="h-5 mb-2">
    <div
      className="h-5 bg-black/80 text-white text-xs flex justify-end items-center fixed left-0 top-0 w-full"
    >
      <div
        class="mr-2 cursor-pointer select-none"
        @click.stop="navgate('home')"
      >
        Home
      </div>
      <div
        class="mr-2 cursor-pointer select-none"
        @click.stop="navgate('gallery')"
      >
        Gallery
      </div>
      <div
        class="mr-2 cursor-pointer select-none"
        @click.stop="navgate('assets')"
      >
        Assets
      </div>
    </div>
  </div>
  <div class="max-w-[1024px] mx-auto">
    <slot />
  </div>
</template>

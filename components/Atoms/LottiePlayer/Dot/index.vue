<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
interface IProps {
  src: string
}

defineProps<IProps>()

useScriptTag('https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs', () => null, {
  type: 'module',
})
</script>

<template>
  <dotlottie-player
    :src="src"
    background="transparent"
    speed="1"
    direction="1"
    mode="normal"
    loop autoplay
  />
</template>

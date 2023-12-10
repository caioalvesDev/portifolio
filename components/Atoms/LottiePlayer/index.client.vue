<script setup lang="ts">
import type { MaybeElement, MaybeElementRef } from '@vueuse/core'
import { useIntersectionObserver } from '@vueuse/core'
import type { LottieProps } from 'vue3-lottie'
import { Vue3Lottie } from 'vue3-lottie'

interface IProps extends Partial<LottieProps> {
  src?: string
}

const props = defineProps<IProps>()

const lottieRef = ref<InstanceType<typeof Vue3Lottie>>()

useIntersectionObserver(
  lottieRef as MaybeElementRef<MaybeElement>,
  ([{ isIntersecting }]) => {
    if (isIntersecting)
      lottieRef.value?.play()

    else
      lottieRef.value?.pause()
  },
)
</script>

<template>
  <div>
    <Vue3Lottie
      ref="lottieRef"
      v-bind="props"
    />
  </div>
</template>

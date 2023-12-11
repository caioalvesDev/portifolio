<script setup lang="ts">
import { get } from "@vueuse/core";
import { breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");

const error: any = useError();
const defaultErrorCode = 404;

// type Error = keyof ReturnType<typeof useError>

const statusCode = computed(() => {
  if ((error.value?.message).toLowerCase() === "maintenance") return 503;
  return error.value?.statusCode;
});

const heading = computed(() => {
  if ((error.value?.message).toLowerCase() === "maintenance") return "Maintenance";
  if ((error.value?.message).toLowerCase() === "page not found") return "Página não encontrada";

  return error.value?.message;
});
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-y-auto overflow-x-hidden bg-white">
    <div :class="[isMobile ? 'flex-col' : 'flex-col', 'flex h-screen gap-12 items-center justify-center ']">
      <div class="text-center">
        <p class="text-8xl">{{ statusCode }}</p>
        <h3 class="text-4xl">{{ heading }}</h3>
      </div>

      <div class="flex flex-col items-center"></div>
    </div>
  </div>
</template>

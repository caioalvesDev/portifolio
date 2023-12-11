<template>
  <NuxtLayout>
    <div class="flex flex-col min-h-screen">
      <NuxtLoadingIndicator  :height="5" />
      <AtomsHeader />
      <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
        <NuxtPage />
      </main>
      <AtomsFooter />
    </div>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


:is(body, div) {
  --sb-track-color: #232e33;
  --sb-thumb-color: #000000;
  --sb-size: 14px;

  scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
}

:is(body, div)::-webkit-scrollbar {
  width: var(--sb-size);
}

:is(body, div)::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 1px;
}

:is(body, div)::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 1px;
  border: 2px solid var(--sb-track-color);
}
</style>

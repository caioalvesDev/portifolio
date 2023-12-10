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
</style>

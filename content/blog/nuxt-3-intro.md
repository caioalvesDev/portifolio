---
title: Introdução ao Nuxt 3
description: Esta é uma introdução rápida sobre como começar a usar o Nuxt 3.
date: 2023-05-24
cover: Work-NuxtJS.png
icon: "mdi:calendar-blank"
tags:
  - Nuxt
  - Vue
  - Javascript
---

# Introdução ao Nuxt 3

::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/Work-NuxtJS.png){.rounded-lg.w-full}

Esta é uma introdução rápida sobre como começar a usar o Nuxt 3. Para começar, você precisa ter o Node.js instalado em sua máquina. Você pode baixá-lo em [aqui](https://nodejs.org/en/download/). Depois de instalar o Node.js, você pode instalar o Nuxt 3 usando o seguinte comando:

```bash
npx nuxi init <project-name>
cd <project-name>
npm i
```

Em seguida, você pode começar a construir seu aplicativo usando `app.vue`.

```vue
<script setup></script>

<template>
  <div class="flex flex-col min-h-screen">
    <AtomsHeader />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <AtomsFooter />
  </div>
</template>
```

<script setup>
const { data: posts } = await useAsyncData("posts", () => queryContent("/blog").find());
</script>

<template>
  <h1 class="text-3xl mt-7 mb-3">Postagens no blog</h1>
  <p class="my-1 font-semibold">Gosto de escrever sobre qualquer coisa que esteja trabalhando atualmente ou algo novo que me interesse.</p>
  <p class="font-semibold">Este blog tem como objetivo trazer conteúdos relacionados a todo o ecossistema Javascript.</p>
  <p class="my-1 font-semibold">
    Conheça dicas e tutorias relacionados aos Frameworks e Bibliotecas Javascript, como: React, Next, Vue, Angular, Electron e muitos
    outros.
  </p>

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <AtomsPost :posts="posts" />
  </section>
</template>

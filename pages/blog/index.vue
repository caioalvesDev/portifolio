<script setup>
const { data: posts } = await useAsyncData("posts", () => queryContent("/blog").find());
</script>

<template>
  <h1 class="text-3xl my-8">Postagens no blog</h1>

  Gosto de escrever sobre qualquer coisa que esteja trabalhando atualmente ou algo novo que me interesse. Se você quiser que eu escreva
  sobre algo ou seja um blogueiro convidado em seu blog, entre em contato comigo no Twitter. Se desejar assinar um feed RSS, você pode
  encontrá-lo aqui.

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <AtomsPost :posts="posts" />
  </section>
</template>

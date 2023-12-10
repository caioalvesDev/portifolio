<script setup>
const { data: posts } = await useAsyncData("latest-posts", () => queryContent("/blog").sort({ date: 1 }).limit(3).find());
useHead({
  title: "Home | Caio Alves Dev",
})
</script>

<template>
  <div>
    <section>
      <h1 class="text-5xl font-bold mt-20">👋🏻 Olá, eu me chamo Caio Alves!</h1>
      <p class="text-base text-gray-900 p-2 italic">Software Developer</p>
    </section>
    <section class="flex flex-col md:flex-row">
      <div class="md:w-3/4">
        <h2 class="text-3xl font-bold mt-8">Minha história</h2>
        <p class="text-lg py-2">
          Sou um engenheiro de software. Sou um programador autodidata que acredita firmemente que você pode realizar qualquer coisa nesta
          vida se se dedicar, arregaçar as mangas e estiver disposto a trabalhar.
        </p>
        <p class="text-lg py-2">
          Venho desenvolvendo software há mais de 5 anos e uso meu conhecimento, paixão e influência para ajudar outros desenvolvedores a
          alcançar seus objetivos.
        </p>
        <p class="text-lg py-2">
          Na minha vida pessoal, gosto de jogar, ver animes e estudar programação. Já mencionei que gosto de jogar? Além disso, pratico
          corrida e faço exercícios para tentar ser uma pessoa saudável haha.
        </p>
      </div>
      <!-- <img src="~/assets/images/danvega-avatar.png" class="w-1/2 md:max-w-sm p-8 mx-auto" /> -->
      <AtomsLottiePlayerDot class="w-1/2 p-2 mx-auto" src="https://lottie.host/add50188-1e9a-4cc3-828c-759f685ac633/fAnjpfqVuN.json" />
    </section>
    <section>
      <h2 class="text-3xl font-bold mt-5">Últimas postagens do blog</h2>
      <div class="grid md:grid-cols-3 pt-8 gap-10">
        <AtomsPost :posts="posts" />
      </div>
    </section>
  </div>
</template>

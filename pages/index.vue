<script setup>
const { data: posts } = await useAsyncData("latest-posts", () => queryContent("/blog").sort({ date: -1 }).limit(3).find());
useHead({
  title: "Home | Caio Alves Dev",
});
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
          Como um engenheiro de software e programador autodidata, mantenho a convicção firme de que a dedicação, determinação e disposição
          para o trabalho são os pilares essenciais para alcançar qualquer objetivo na vida.
        </p>
        <p class="text-lg py-2">
          Com mais de 5 anos de experiência no desenvolvimento de software, utilizo meu conhecimento, paixão e influência para auxiliar
          outros desenvolvedores a atingirem seus objetivos.
        </p>
        <p class="text-lg py-2">
          Na minha vida pessoal, sou apaixonado por jogos (sério, sou fã de carteirinha!), curto acompanhar animes e passo um bom tempo estudando programação - sério mesmo, sou um entusiasta! Ah, e sobre isso de jogar, é uma das minhas coisas favoritas! Além disso, dou umas corridinhas e faço exercícios, sabe, para manter a saúde em dia (pelo menos tento, haha!).
        </p>
      </div>
      <!-- <img src="~/assets/images/danvega-avatar.png" class="w-1/2 md:max-w-sm p-8 mx-auto" /> -->
      <AtomsLottiePlayerDot class="w-1/2 p-2 mx-auto" src="https://lottie.host/2affe605-8af5-4f85-8f5c-dfdb09b2f3b8/jtJ7OC9UrG.json" />
    </section>
    <section class="mb-8">
      <h2 class="text-3xl font-bold mt-5">Últimas postagens do blog</h2>
      <div class="grid md:grid-cols-3 pt-8 gap-10">
        <AtomsPost :posts="posts" />
      </div>
    </section>
  </div>
</template>

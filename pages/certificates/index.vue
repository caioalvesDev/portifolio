<script lang="ts" setup>
interface ICertificate {
  id: number;
  description: string;
  url: string;
  name: string;
  totalHour: string;
}

const certificates: ICertificate[] = [
  {
    id: 1,
    description: "Learn how to write readable, understandable and therefore maintainable code - step by step, in an example-driven way",
    url: "https://www.udemy.com/certificate/UC-5f7fa082-3d7a-40d5-8d0a-fbb72cf14678/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    name: "Clean Code",
    totalHour: "6h 41m"
  },
  {
    id: 2,
    description: "Ultimate guide to Vue 3 Development. Build large scale applications and deploy to production. Go from Zero to Mastery!",
    url: "https://www.udemy.com/certificate/UC-1f6c5776-001a-4ef1-9051-99b5908d0f00/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    name: "Complete Vue Developer 2023: Zero to Mastery (Pinia, Vitest)",
    totalHour: "28h 2m"
  },
  {
    id: 3,
    description: "Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!",
    url: "https://www.udemy.com/certificate/UC-a939e277-775c-457e-b339-5eb76ef4e203/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    name: "Understanding TypeScript",
    totalHour: "14h 56m"
  },
  {
    id: 4,
    description: "Desenvolva Apps Incríveis para Android, iOS e Web com apenas 1 código! Flutter: a revolução da Google!",
    url: "https://www.udemy.com/certificate/UC-121ade25-67c6-443e-aa3d-8fb198398c72/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    name: "Criação de Apps Android/iOS/Web com Flutter - 5 cursos em 1",
    totalHour: "64h 39m"
  },
  {
    id: 5,
    description: "Aprenda React JS na pratica a criar aplicações completas do extremo ZERO ao avançado!",
    url: "https://www.udemy.com/certificate/UC-75bed0ef-139b-482b-a76a-ad3c1741c824/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    name: "React Js do zero ao avançado na pratica",
    totalHour: "23h 32m"
  },
  {
    id: 6,
    description: "Aprenda a criar qualquer sistema web, com Node.js e Javascript na prática, domine as principais tecnologias do mercado.",
    url: "https://www.udemy.com/certificate/UC-2ae29f69-c78d-4385-a837-031538c1e187/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    name: "Formação Node.js",
    totalHour: "49h 57m"
  },
  {
    id: 7,
    description: "Criando aplicações utilizando TailwindCSS",
    url: "https://alunos.b7web.com.br/media/certificates/certificado_5227474.jpg",
    name: "TailwindCSS",
    totalHour: "20h"
  },
  {
    id: 8,
    description: "Desenvolva utilizando Angular 9",
    url: "https://alunos.b7web.com.br/media/certificates/certificado_5378346.jpg",
    name: "Angular 9",
    totalHour: "20h"
  },
  {
    id: 9,
    description: "Learn how to build robust, modern websites with Nuxt from scratch. Or improve your website performance, code quality, while making better use of the framework.",
    url: "https://masteringnuxt.com/certificates/9ad2f2e2-ddd9-4019-a19d-9e6e4b8fab85?signature=ec5b321241a6592ccc2e46389a1ebb09247800bdd216acf0cd27222a03258052",
    name: "Mastering Nuxt Course",
    totalHour: "8h 33m"
  },
  {
    id: 10,
    description: "Crie aplicações reativas com Vuejs",
    url: "https://alunos.b7web.com.br/media/certificates/certificado_9569071.jpg",
    name: "Vuejs",
    totalHour: "25h"
  },
  {
    id: 11,
    description: "Ambiente Local com Docker",
    url: "https://www.upinside.com.br/certificados/6701570202310",
    name: "Ambiente Local com Docker",
    totalHour: "10h"
  },
  {
    id: 12,
    description: "Laravel Express - Desenvolva dashboards inteligentes com Laravel, Livewire e OpenAi.",
    url: "https://academy.beerandcode.com.br/certificates/xOMj6d",
    name: "Laravel Express",
    totalHour: "15h"
  },
 

];
</script>

<template>
  <div>
    <h1 class="text-3xl my-8 font-bold">Certificados</h1>
    <div class="mb-8">
      <p class="text-lg">Aqui estão alguns dos meus Certificados adquiridos 📖.</p>
      <p class="text-lg">Conhecimento nunca é demais haha.</p>
    </div>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-8 mb-8">
      <div
        v-for="certificate in certificates"
        :key="certificate.id"
        class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50 hover:border-black duration-300 ease-in-out hover:translate-x-2 hover:-translate-y-2"
      >
        <div class="">
          <a :href="certificate.url" target="_blank">
            <h2 class="text-2xl text-black font-semibold mb-2 hover:underline">{{ certificate.name }}</h2>
          </a>
          <p>{{ certificate.description }}</p>
          <div class="mt-4 flex gap-2 ">
            <div class="flex items-center gap-2">
              <Icon name="fontisto:clock" size="1.1rem" class="text-black" /> Duração total: {{ certificate.totalHour }}
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="btn-shadow" v-for="_ in 10">
      <div class="translate-box-shadow"></div>
      </div> -->
    </section>
  </div>
</template>

<style>

.btn-shadow div {
  text-decoration:none;
  font-size: 1.1em;
  font-family:Verdana, Geneva, sans-serif;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.translate-box-shadow {
  padding: 20px 40px;
  color: #fff;
  background-color: #4c4c4c;
  /* border-radius:50px; */
  border-radius: 0.5rem;
}
.translate-box-shadow:hover {
  color: #4c4c4c;
  border: 1px solid black;
  -webkit-box-shadow: -8px -8px 0 #4c4c4c;
  -moz-box-shadow: -8px 8px 0 #4c4c4c;
  box-shadow: -8px -8px 0 #4c4c4c;
  -webkit-transform: translate(8px, 8px);
  -moz-transform: translate(8px, 8px);
  -ms-transform: translate(8px, 8px);
  -o-transform: translate(8px, 8px);
  transform: translate(8px, 8px);
}
</style>

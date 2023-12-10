<script setup>
const query = gql`
  {
    viewer {
      repositories(first: 40, privacy: PUBLIC, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
          id
          name
          createdAt
          description
          url
          forks {
            totalCount
          }
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const { data, error } = await useAsyncQuery(query);

useHead({
  title: "Projects | Caio Alves Dev",
});
</script>

<template>
  <div>
    <h1 class="text-3xl my-8 font-bold">Projetos</h1>
    <p class="text-lg mb-8">Aqui estão alguns dos meus projetos no GitHub 🚀.</p>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="project in data?.viewer.repositories.nodes"
        :key="project.id"
        class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50 hover:border-black duration-300 ease-in-out"
      >
        <a :href="project.url" target="_blank">
          <h2 class="text-2xl text-black font-semibold mb-2 hover:underline">{{ project.name }}</h2>
        </a>
        <p>{{ project.description }}</p>
        <div class="mt-4 flex gap-2">
          <div class="flex items-center gap-1">
            <Icon name="fontisto:star" size="1.1rem" class="text-black" /> Stars: {{ project.stargazers.totalCount }}
          </div>
          <div class="flex items-center gap-1">
            <Icon name="system-uicons:branch" size="1.1rem" class="text-black" /> Forks: {{ project.forks.totalCount }}
          </div>
          <div class="flex items-center gap-1">
            <Icon name="system-uicons:eye" size="1.1rem" class="text-black" /> Watchers: {{ project.watchers.totalCount }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

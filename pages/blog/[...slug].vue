<script setup>
const { path } = useRoute()
console.log(path);

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent()
    .where({ _path: path })
    .findOne()
})
</script>

<template>
  <div>
    <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
    <div class="my-12">
      <p class="font-bold text-3xl my-11">Marcadores</p>
      <a v-for="tag in  data.tags " :key="tag" :href="`/blog/tags/${tag}`"
        class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-black uppercase last:mr-0 mr-4">
        <Icon name="pajamas:label" size="1.5rem" class="text-gray-100 mr-2" /> {{ tag }}
      </a>
    </div>
  </div>
</template>
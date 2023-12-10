<script setup>
const props = defineProps(["posts"]);
</script>

<template>
  <div
    v-for="post in props.posts"
    :key="post.slug"
    class="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 duration-300 ease-in-out hover:opacity-75 hover:shadow-2xl my-6"
  >
    <NuxtLink :to="post._path">
      <img :src="`/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover" />
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-700 mb-4">{{ post.description }}</p>
        <!-- <NuxtLink :to="post._path" class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8"
          >Ver mais
        </NuxtLink> -->
      </div>
    </NuxtLink>
  </div>
</template>

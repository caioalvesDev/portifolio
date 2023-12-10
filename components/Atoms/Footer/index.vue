<script lang="ts" setup>
interface ILinks {
  name: string;
  href: string;
  icon: string;
}

const links: ILinks[] = [
  { name: "GitHub", href: "https://github.com/caioalvesDev", icon: "entypo-social:github-with-circle" },
  // { name: "Twitter", href: "https://twitter.com", icon: "entypo-social:twitter" },
  { name: "Facebook", href: "https://facebook.com/kaio.alves.336", icon: "entypo-social:facebook" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/caio-alves-dev/", icon: "entypo-social:linkedin-with-circle" },
  // { name: "Instagram", href: "https://instagram.com", icon: "entypo-social:whatsapp-with-circle" },
];
</script>

<template>
  <footer class="bg-black py-4">
    <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 gap-2 flex flex-col md:flex-row items-center">
      <p class="flex-1">&copy; Caio Alves 2023. All Rights Reserved</p>
      <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
        </a>
      </div>
    </section>
  </footer>
</template>

<style></style>

<template>
  <BlogItem
    v-for="(post, index) in posts"
    :id="`blog-post-${index + 1}`"
    :key="index"
    :slug="post._path"
    :title="post.title"
    :description="post.description"
  />
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("home", () =>
  queryContent("/").limit(5).only(["description", "title", "_path"]).find()
);

useHead({
  title: "Josué Ayala – Blog",
  meta: [
    {
      name: "description",
      content:
        "💚 Passionate Developer and proud Vue.js enthusiast. 💻✨ I turn ideas into beautiful code! 🚀💡",
    },
    {
      property: "og:url",
      content: "https://josueayala.me",
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Josué Ayala – Blog" },
    {
      property: "og:description",
      content:
        "💚 Passionate Developer and proud Vue.js enthusiast. 💻✨ I turn ideas into beautiful code! 🚀💡",
    },
    {
      property: "og:image",
      content: "https://josueayala.me/api/og?title=josueayala",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:domain", content: "josueayala.me" },
    {
      property: "twitter:url",
      content: "https://josueayala.me",
    },
    { name: "twitter:title", content: "Josué Ayala – Blog" },
    {
      name: "twitter:description",
      content:
        "💚 Passionate Developer and proud Vue.js enthusiast. 💻✨ I turn ideas into beautiful code! 🚀💡",
    },
    {
      name: "twitter:image",
      content: "https://josueayala.me/api/og?title=josueayala",
    },
  ],
});
</script>

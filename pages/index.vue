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
  meta: [{ name: "description", content: "" }],
});
</script>

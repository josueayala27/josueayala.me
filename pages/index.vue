<template>
  <div
    class="prose prose-a:no-underline prose-slate dark:prose-invert max-w-none"
  >
    <BlogItem
      v-for="(post, index) in data"
      :id="`blog-post-${index + 1}`"
      :key="index"
      :slug="post._path"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("home", () =>
  queryContent("/")
    .limit(5)
    .where({ isPublished: true })
    .only(["description", "title", "_path"])
    .find()
);
</script>

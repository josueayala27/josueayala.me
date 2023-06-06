<template>
  <ContentList v-slot="{ list }" :query="query">
    <BlogItem
      v-for="(post, index) in list"
      :id="`blog-post-${index + 1}`"
      :key="index"
      :slug="post._path"
      :title="post.title"
      :description="post.description"
    />
  </ContentList>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/",
  where: [{ isPublished: true }],
  limit: 5,
  only: ["description", "title", "_path"],
};

console.log("Force build.");
</script>

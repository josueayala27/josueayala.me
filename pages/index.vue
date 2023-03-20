<template>
  <div
    class="prose prose-a:no-underline prose-slate dark:prose-invert max-w-none"
  >
    <BlogItem
      v-for="(post, index) in posts"
      :id="`blog-post-${index + 1}`"
      :key="index"
      :data="post"
    />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $content }) {
    const posts = await $content("en")
      .limit(5)
      .where({ isPublished: true })
      .only(["description", "title", "slug"])
      .fetch();
    return { posts };
  },
};
</script>

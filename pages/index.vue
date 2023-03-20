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
<<<<<<< Updated upstream
  name: 'IndexPage',
  async asyncData({ $content, app }) {
    const posts = await $content(app.i18n.locale)
=======
  name: "IndexPage",
  async asyncData({ $content }) {
    const posts = await $content("en")
>>>>>>> Stashed changes
      .limit(5)
      .where({ isPublished: true })
      .only(["description", "title", "slug"])
      .fetch();
    return { posts };
  },
};
</script>

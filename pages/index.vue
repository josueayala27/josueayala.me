<template>
  <div class="prose prose-a:no-underline prose-slate dark:prose-invert">
    <BlogItem
      :id="`blog-post-${index + 1}`"
      v-for="(post, index) in posts"
      :key="index"
      :data="post" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, app }) {
    const posts = await $content(app.i18n.locale)
      .limit(5)
      .sortBy('date', 'desc')
      .where({ isPublished: true })
      .only(['description', 'title', 'slug'])
      .fetch();
    return { posts };
  },
};
</script>

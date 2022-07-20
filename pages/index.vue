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
  async asyncData({ $content }) {
    const posts = await $content('es')
      .limit(5)
      .where({ isPublished: true })
      .only(['description', 'title', 'slug'])
      .fetch();
    return { posts };
  },
};
</script>

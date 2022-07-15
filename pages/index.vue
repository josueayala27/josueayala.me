<template>
  <div class="prose prose-a:no-underline prose-slate">
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
    const posts = await $content()
      .only(['description', 'title', 'path'])
      .fetch();
    return { posts };
  },
};
</script>

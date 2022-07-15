<template>
  <div class="prose prose-a:no-underline prose-slate">
    <div class="text-pastel-green-600 font-semibold">RECENTLY PUBLISHED</div>

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
      .only(['description', 'title', 'slug'])
      .fetch();
    return { posts };
  },
};
</script>

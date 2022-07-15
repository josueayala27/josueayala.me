<template>
  <div class="prose prose-a:no-underline prose-slate">
    <div
      :id="`blog-post-${index + 1}`"
      v-for="(post, index) in posts"
      :key="index"
      class="cursor-pointer group">
      <h2 class="group-hover:text-[#66D88C]">
        {{ post.title }}
      </h2>
      <p>
        {{ post.description }}
      </p>
      <div class="flex gap-3 items-center">
        <router-link :to="`/blog${post.path}`"> Read more </router-link>
        <icon name="chevron-double-right" />
      </div>
    </div>
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

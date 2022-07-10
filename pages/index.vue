<template>
  <div class="prose">
    <ul>
      <li v-for="(post, i) in posts" :key="i">
        <router-link :to="`/blog${post.path}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
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

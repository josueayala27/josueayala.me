<template>
  <div class="prose max-w-none hover:prose-a:text-blue-600">
    <div id="heading">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <div class="border-b"></div>
    </div>
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SlugPage',
  async asyncData({ $content, params }: any) {
    const page = await $content(params.slug).fetch();
    return { page };
  },
});
</script>

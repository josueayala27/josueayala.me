<template>
  <div class="prose max-w-none text-justify hover:prose-a:text-blue-600">
    <div id="heading">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <div class="border-b"></div>
    </div>
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SlugPage',
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch();
    return { page };
  },
  setup() {
    const page = reactive({
      hola: true,
    });
    console.log(page);

    return { page };
  },
});
</script>

<template>
  <div
    class="prose max-w-none hover:prose-a:text-pastel-green-600 prose-a:no-underline dark:prose-invert">
    <Breadcrumb />

    <!-- Header -->
    <section>
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <div class="border-b"></div>
    </section>

    <!-- Table of contents -->
    <section>
      <h2>On this page</h2>
      <ul>
        <li
          v-for="(link, i) in page.toc"
          :key="i"
          class="cursor-pointer font-medium">
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
      <div class="border-b"></div>
    </section>

    <!-- Blog content -->
    <nuxt-content :document="page" />

    <!-- Comments section -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SlugPage',
  async asyncData({ $content, params }: any) {
    const page = await $content(`es/${params.slug}`).fetch();
    return { page };
  },
});
</script>

<template>
  <div
    @click="$router.push({ name: 'blog-slug', params: { slug: data.slug } })"
    v-bind="{ ...$attrs }"
    class="cursor-pointer group">
    <h2 class="group-hover:text-pastel-green-600 transition-all duration-300">
      {{ data.title }}
    </h2>
    <p class="text-justify">
      {{ data.description }}
    </p>
    <div class="flex items-center gap-1">
      <router-link ref="blog-redirect" :to="`/blog${data.path}`">
        Read more
      </router-link>
      <icon
        class="opacity-0 text-pastel-green-600 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
        name="chevron-double-right" />
    </div>
  </div>
</template>

<script lang="ts">
import sanitize from '@/utils/url';

export default {
  name: 'BlogItemComponent',
  props: {
    data: { type: Object },
  },
  data() {
    return {
      sanitize,
    };
  },
};
</script>

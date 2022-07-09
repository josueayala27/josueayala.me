<template>
  <div class="prose text-justify">
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch();
    return { page };
  },
});
</script>

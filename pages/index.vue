<template>
  <div class="prose text-justify">
    <nuxt-content :document="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  async asyncData({ $content }) {
    const page = await $content('hello').fetch();
    return { page };
  },
});
</script>

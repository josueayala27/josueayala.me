<template>
  <div class="flex gap-3 items-center py-6">
    <div
      :id="i + 1"
      class="flex gap-3 items-center"
      v-for="({ text, to }, i) in routes"
      :key="i">
      <router-link v-bind="{ to }">{{ text }}</router-link>
      <Icon v-if="routes.length !== i + 1" name="chevron-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbComponent',
  data() {
    return {
      routes: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: this.$route.params.slug,
          to: this.$route.params.slug,
        },
      ],
    };
  },
};
</script>

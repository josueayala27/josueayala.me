<template>
  <div
    @click="
      $router.push({
        name: `blog-slug___${$i18n.locale}`,
        params: { slug: data.slug },
      })
    "
    v-bind="{ ...$attrs }"
    class="cursor-pointer group">
    <div class="py-3"></div>
    <h1 class="group-hover:text-pastel-green-600 transition-all duration-300">
      {{ data.title }}
    </h1>
    <p>
      {{ data.description }}
    </p>
    <div class="flex items-center gap-1">
      <span class="font-semibold">{{ $t('home.read-more') }}</span>
      <icon
        class="opacity-0 text-pastel-green-600 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
        name="chevron-double-right" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BlogItemComponent',
  props: {
    data: { type: Object },
  },
};
</script>

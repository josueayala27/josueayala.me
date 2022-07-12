<template>
  <div class="flex items-center justify-center h-screen">
    <img
      class="rounded-full overflow-hidden object-cover aspect-square w-[50%]"
      src="@/assets/img/125269448_3566643150045828_3681845615705051439_n.jpeg"
      alt="Josué Ayala Page" />
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

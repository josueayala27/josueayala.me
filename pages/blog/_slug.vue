<template>
  <div class="max-w-none">
    <Breadcrumb />

    <!-- Header -->
    <section class="prose">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <div class="border-b"></div>
    </section>

    <!-- Table of contents -->
    <section
      class="prose pt-[20px] hover:prose-a:text-pastel-green-600 prose-a:no-underline">
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
    <nuxt-content
      class="prose hover:prose-a:text-pastel-green-600 prose-a:no-underline dark:prose-invert pt-[20px]"
      :document="page" />

    <!-- Comments section -->
    <div class="p-5 rounded-lg border flex gap-2">
      <Icon size="1.8rem" class="cursor-pointer" name="heart" />
      <Icon
        @click="comments.show = !comments.show"
        size="1.8rem"
        class="cursor-pointer"
        name="annotation" />
    </div>
    <transition name="slide">
      <Comments v-if="comments.show" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SlugPage',
  data() {
    return {
      comments: {
        show: false,
        data: [],
      },
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    async get() {
      const { data } = await this.$supabase.from('comments').select('*');
      this.comments.data = data;
    },
  },
  async asyncData({ $content, params }) {
    const page = await $content(`es/${params.slug}`).fetch();
    return { page };
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  @apply transition-all duration-500;
}
.slide-enter,
.slide-leave-to {
  @apply -translate-x-full;
}
</style>

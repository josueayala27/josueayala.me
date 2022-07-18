<template>
  <div class="max-w-none">
    <Breadcrumb />

    <!-- Header -->
    <section class="prose">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
    </section>

    <Separator />

    <!-- Table of content -->
    <section
      class="prose hover:prose-a:text-pastel-green-600 prose-a:no-underline">
      <h2>On this page</h2>
      <ul>
        <li
          v-for="(link, i) in page.toc"
          :key="i"
          class="cursor-pointer font-medium">
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </section>

    <Separator />

    <!-- Content  -->
    <nuxt-content
      class="prose hover:prose-a:text-pastel-green-600 prose-a:no-underline dark:prose-invert"
      :document="page" />

    <Separator />

    <!-- Comments  -->
    <section class="flex flex-col gap-5">
      <article class="flex flex-col gap-y-3" v-for="(comment, i) in 3" :key="i">
        <div class="flex gap-x-3 items-center">
          <img
            class="h-[3rem] w-[3rem] object-cover"
            src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/17be4dd08c5417027a544816a909fcf8/979c9db7-f35c-4beb-9df9-6c8b3c04d1b3_rw_600.gif?h=58f48393c5b7fbd65d39f6ab7e9b095b"
            alt="Josué ayala image" />
          <div class="flex flex-col text-sm">
            <span class="font-semibold">Josué Ayala</span>
            <span>3 years ago</span>
          </div>
        </div>
        <span class="text-sm">
          Awesome nice blog, how is the build in compilation time?
        </span>
        <div class="flex gap-2">
          <Icon size="1.8rem" class="cursor-pointer" name="heart" />
          <Icon size="1.8rem" class="cursor-pointer" name="annotation" />
        </div>
        <div class="border-b"></div>
      </article>
    </section>
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

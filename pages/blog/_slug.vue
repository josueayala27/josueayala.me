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
      <div class="flex justify-between items-center prose">
        <h2>Coments ({{ comments.data.length }})</h2>
      </div>

      <div class="flex flex-col gap-2">
        <input
          class="rounded-lg p-4 outline-none bg-gray-100"
          type="text"
          placeholder="Enter comment"
          v-model="comments.model" />
        <div class="flex justify-end">
          <Button
            :is-loading="loaders.comment"
            icon-align="left"
            @click="sendComment()">
            <template #icon>
              <Icon name="plus" />
            </template>
            Send
          </Button>
        </div>
      </div>

      <Comment :data="comment" v-for="(comment, i) in comments.data" :key="i" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'SlugPage',
  data() {
    return {
      loaders: {
        comment: false,
      },
      comments: {
        model: '',
        show: false,
        data: [],
      },
    };
  },
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const { data } = await this.$supabase
        .from('comments')
        .select('content, created_at, id, is_pinned, user:user_id (*)', {
          count: 'exact',
        })
        .eq('post_id', this.page.uuid)
        .order('created_at', { ascending: false });

      this.comments.data = data;
      this.loaders.comment = false;
      this.comments.model = '';
    },

    async sendComment() {
      this.loaders.comment = true;
      await this.$supabase.from('comments').insert([
        {
          content: this.comments.model,
          post_id: this.page.uuid,
          user_id: this.$supabase.auth.user().id,
        },
      ]);

      this.getComments();
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

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
      <div class="prose">
        <h2>Coments ({{ comments.data.length }})</h2>
      </div>

      <input type="text" placeholder="Enter comment" v-model="comments.model" />
      <button @click="sendComment()">Send comment</button>
      <article
        class="flex flex-col gap-2"
        v-for="(comment, i) in comments.data"
        :key="i">
        <div class="flex gap-x-3 items-center">
          <img
            class="h-[3rem] w-[3rem] object-cover rounded-full overflow-hidden"
            :src="comment.user.raw_user_meta_data.picture"
            :alt="`${comment.user.raw_user_meta_data.full_name} image`" />
          <div class="flex flex-col text-sm">
            <span class="font-semibold">
              {{ comment.user.raw_user_meta_data.full_name }}
            </span>
            <span>
              {{ dayjs(comment.created_at).fromNow() }}
            </span>
          </div>
        </div>
        <span v-html="comment.content" class="text-sm"> </span>

        <!-- <div class="flex gap-2">
          <Icon size="1.8rem" class="cursor-pointer" name="heart" />
          <Icon size="1.8rem" class="cursor-pointer" name="annotation" />
        </div> -->

        <Separator
          classes="py-[5px]"
          v-if="comments.data.length !== i + 1"
          width="80%" />
      </article>
    </section>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default {
  name: 'SlugPage',
  data() {
    return {
      dayjs,
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
    },

    async sendComment() {
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

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
    <section class="flex flex-col gap-5" v-if="false">
      <div class="flex justify-between items-center">
        <div class="prose">
          <h2>Coments ({{ comments.data.length }})</h2>
        </div>

        <Button
          v-if="!user"
          @click="login('google')"
          color="primary"
          icon-align="left">
          <template #icon>
            <Icon name="plus" />
          </template>
          Write a comment
        </Button>
      </div>

      <div class="flex flex-col gap-2" v-if="user">
        <Input
          type="text"
          placeholder="Write a comment"
          v-model="comments.model" />
        <div class="flex justify-end">
          <Button
            color="primary"
            :is-loading="loaders.comments.add"
            icon-align="left"
            @click="sendComment()">
            <template #icon>
              <Icon name="plus" />
            </template>
            Send
          </Button>
        </div>
      </div>

      <Comment
        @delete="(evt) => deleteComment(evt)"
        :data="comment"
        v-for="(comment, i) in comments.data"
        :key="i" />
    </section>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default {
  name: 'SlugPage',

  middleware: ['auth'],

  data() {
    return {
      user: false,
      loaders: {
        comments: {
          get: false,
          delete: false,
          add: false,
        },
        blog: {},
      },

      comments: {
        model: '',
        show: false,
        data: [],
      },
    };
  },

  methods: {
    async login() {
      const provider = new GoogleAuthProvider();

      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = await this.$axios.$get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
      );
      console.log(user);
    },
  },

  async asyncData({ $content, params }) {
    const page = await $content(`es/${params.slug}`).fetch();
    return { page };
  },

  head() {
    return {
      title: this.page.title,
    };
  },
};
</script>

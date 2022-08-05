<template>
  <div class="max-w-none">
    <section class="py-6 prose capitalize">
      <p>{{ $dayjs(page.createdAt).format('MMM D, YYYY') }}</p>
    </section>

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

    <div class="prose flex gap-3">
      <Icon
        @click="getURL"
        class="cursor-pointer hover:text-[#1DA1F2] transition-all"
        size="1.5rem"
        category="solid"
        name="twitter" />
    </div>

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

    getURL() {
      window.open(
        `https://twitter.com/share?text=${this.page.title}&url=${window.location.href}`,
        '_blank'
      );
    },
  },

  async asyncData({ $content, params, app }) {
    const page = await $content(app.i18n.locale, params.slug).fetch();
    return { page };
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.title,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://www.josueyala.me/_nuxt/img/125269448_3566643150045828_3681845615705051439_n.84b6fb2.jpeg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content:
            'https://dev.josueyala.me/blog/using-lottie-files-with-nuxtjs',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://www.josueyala.me/_nuxt/img/125269448_3566643150045828_3681845615705051439_n.84b6fb2.jpeg',
        },
      ],
    };
  },
};
</script>

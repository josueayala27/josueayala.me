<template>
  <div class="max-w-none">
    <section class="py-3 prose capitalize">
      <p>
        {{ $t('blog.posted') }}
        {{ $dayjs(page.createdAt).locale($i18n.locale).format('MM MMMM YYYY') }}
      </p>
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
      <h2>{{ $t('blog.on-this-page') }}</h2>
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
      class="prose prose-code:before:content-none prose-code:after:content-none hover:prose-a:text-pastel-green-600 prose-a:no-underline dark:prose-invert"
      :document="page" />

    <Separator />

    <!-- Comments  -->
    <section class="flex flex-col gap-5">
      <div class="flex justify-between items-center">
        <div class="prose">
          <h2>Coments (0)</h2>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <Input type="text" placeholder="Write a comment" />
        <div class="flex justify-end">
          <Button
            :is-loading="loaders.login"
            @click="login"
            color="primary"
            icon-align="left">
            <template #icon>
              <Icon name="plus" />
            </template>
            Publish
          </Button>
        </div>
      </div>

      <!-- <Comment @delete="(evt) => deleteComment(evt)" /> -->
    </section>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

export default {
  name: 'SlugPage',

  data() {
    return {
      loaders: {
        login: false,
        comments: {
          get: false,
          delete: false,
          add: false,
        },
      },
    };
  },

  created() {
    this.getComments();
  },

  methods: {
    async login() {
      try {
        this.loaders.login = true;
        const auth = getAuth();
        const result = await signInWithPopup(auth, new GithubAuthProvider());
        const { accessToken: token } =
          GithubAuthProvider.credentialFromResult(result);

        await this.$axios.$post('api/auth/github', {
          token,
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loaders.login = false;
      }
    },

    async getComments() {
      try {
        console.log('Take a while getting comments');
        const comments = await this.$axios.$get('api/comments');
        console.log(comments);
      } catch (error) {
        console.error(error);
      }
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
          content: `${this.$config.BASE_URL}/og/${this.$i18n.locale}/${this.page.slug}.png`,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${this.$config.BASE_URL}/blog/${this.page.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${this.$config.BASE_URL}/og/${this.$i18n.locale}/${this.page.slug}.png`,
        },
      ],
    };
  },
};
</script>

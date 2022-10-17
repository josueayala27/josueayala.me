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

    <div class="prose flex gap-3">
      <Icon
        @click="getURL"
        class="cursor-pointer hover:text-[#1DA1F2] transition-all"
        size="1.5rem"
        category="solid"
        name="twitter" />
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import seoSlug from '@/seo/slug';

export default {
  name: 'SlugPage',
  middleware: ['auth'],
  methods: {
    async login() {
      const provider = new GoogleAuthProvider();

      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const { accessToken } = GoogleAuthProvider.credentialFromResult(result);

      console.log(accessToken);
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
      meta: [...seoSlug(this)],
    };
  },
};
</script>

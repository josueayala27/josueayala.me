<template>
  <div class="max-w-none">
    <section class="py-3 prose capitalize">
      <p>
        <!-- {{ $t('blog.posted') }} -->
        <!-- {{ $dayjs(page.createdAt).locale($i18n.locale).format("MM MMMM YYYY") }} -->
      </p>
    </section>

    <!-- Header -->
    <section>
      <h1>
        Title
        <!-- {{ page.title }} -->
      </h1>
      <p>
        <!-- {{ page.description }} -->
        Description
      </p>
    </section>

    <UiSeparator />
    <ContentDoc :path="route.params.slug + ''" />

    <!-- Table of content -->

    <!-- <section
      class="prose hover:prose-a:text-pastel-green-600 prose-a:no-underline"
    >
      <h2>{{ $t("blog.on-this-page") }}</h2>
      <ul>
        <li
          v-for="(link, i) in page.toc"
          :key="i"
          class="cursor-pointer font-medium"
        >
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </section> -->

    <UiSeparator />

    <!-- Content  -->
    <!-- <nuxt-content
      class="prose prose-code:before:content-none prose-code:after:content-none hover:prose-a:text-pastel-green-600 prose-a:no-underline dark:prose-invert"
      :document="page"
    /> -->

    <UiSeparator />
  </div>
</template>

<script lang="ts">
export default {
  name: "SlugPage",
  // async asyncData({ $content, params, app }) {
  //   const page = await $content(app.i18n.locale, params.slug).fetch();
  //   return { page };
  // },
};
</script>

<script lang="ts" setup>
const route = useRoute();

// const { data } = await useAsyncData("home", () =>
//   queryContent("/" + route.params.slug).
// );
</script>

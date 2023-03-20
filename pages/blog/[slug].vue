<template>
  <div class="max-w-none">
    <section class="py-3 prose capitalize">
      <p>
        <!-- {{ $t('blog.posted') }} -->
        <!-- {{ $dayjs(page.createdAt).locale($i18n.locale).format("MM MMMM YYYY") }} -->
      </p>
    </section>

    <!-- Header -->
    <section class="prose">
      <h1>
        Title
        <!-- {{ page.title }} -->
      </h1>
      <p>
        <!-- {{ page.description }} -->
        Description
      </p>
    </section>

    <Separator />

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

    <Separator />

    <!-- Content  -->
    <!-- <nuxt-content
      class="prose prose-code:before:content-none prose-code:after:content-none hover:prose-a:text-pastel-green-600 prose-a:no-underline dark:prose-invert"
      :document="page"
    /> -->

    <Separator />
  </div>
</template>

<script>
export default {
  name: "SlugPage",
  // async asyncData({ $content, params, app }) {
  //   const page = await $content(app.i18n.locale, params.slug).fetch();
  //   return { page };
  // },
};
</script>

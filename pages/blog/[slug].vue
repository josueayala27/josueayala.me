<template>
  <div class="max-w-none">
    <!-- Header -->
    <section class="py-5 flex flex-col gap-2">
      <h1>
        {{ post.title }}
      </h1>
      <p>
        {{ post.description }}
      </p>
    </section>

    <UiSeparator />

    <!-- Table of content -->
    <section
      class="prose hover:prose-a:text-pastel-green-600 prose-a:no-underline"
    >
      <ul>
        <li
          v-for="(link, i) in post.body.toc.links"
          :key="i"
          class="cursor-pointer font-medium"
        >
          <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </section>

    <UiSeparator />

    <!-- Content  -->
    <ContentRenderer class="flex flex-col gap-4" :value="post" />
  </div>
</template>

<script lang="ts">
export default {
  name: "SlugPage",
};
</script>

<script lang="ts" setup>
const route = useRoute();

const slug = route.params.slug as string;

const { data: post } = await useAsyncData<any>(slug, () =>
  queryContent(slug).findOne()
);

useHead({
  title: post.value.title,
  meta: [
    { name: "description", content: post.value.description },
    {
      property: "og:url",
      content: `https://josueayala.me/blog/${route.params.slug}`,
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: post.value.title },
    { property: "og:description", content: post.value.description },
    {
      property: "og:image",
      content: `https://josueayala.me/api/og?title=${encodeURI(
        post.value.title
      )}`,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:domain", content: "josueayala.me" },
    {
      property: "twitter:url",
      content: `https://josueayala.me/blog/${route.params.slug}`,
    },
    { name: "twitter:title", content: post.value.title },
    { name: "twitter:description", content: post.value.description },
    {
      name: "twitter:image",
      content: `https://josueayala.me/api/og?title=${encodeURI(
        post.value.title
      )}`,
    },
  ],
  script: [{ innerHTML: "console.log('Jacqueline te amo 💚')" }],
});
</script>

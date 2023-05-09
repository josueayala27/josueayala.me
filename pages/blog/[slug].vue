<template>
  <div class="max-w-none">
    <ContentDoc v-slot="{ doc }" :path="`${route.params.slug}`">
      <!-- Header -->
      <section class="py-5 flex flex-col gap-2">
        <h1>
          {{ doc.title }}
        </h1>
        <p>
          {{ doc.description }}
        </p>
      </section>

      <UiSeparator />

      <!-- Table of content -->
      <section
        class="prose hover:prose-a:text-pastel-green-600 prose-a:no-underline"
      >
        <ul>
          <li
            v-for="(link, i) in doc.body.toc.links"
            :key="i"
            class="cursor-pointer font-medium"
          >
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>
      </section>

      <UiSeparator />

      <!-- Content  -->
      <ContentRenderer class="flex flex-col gap-4" :value="doc" />

      <!-- <UiSeparator /> -->
    </ContentDoc>
  </div>
</template>

<script lang="ts">
export default {
  name: "SlugPage",
};
</script>

<script lang="ts" setup>
const route = useRoute();
</script>

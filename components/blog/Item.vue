<template>
  <div
    v-bind="{ ...$attrs }"
    class="cursor-pointer group py-5 flex flex-col gap-2"
    @click="router.push(slug)"
  >
    <h1
      class="group-hover:text-pastel-green-600 transition-all duration-300 text-black"
    >
      {{ title }}
    </h1>
    <p>
      {{ description }}
    </p>
    <div class="flex items-center gap-1">
      <p class="font-semibold">Read more</p>
      <Icon
        class="opacity-0 text-pastel-green-600 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
        name="uil:angle-right-b"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BlogItemComponent",
};
</script>

<script setup lang="ts">
const router = useRouter();

defineProps<{
  description: string;
  title: string;
  slug: string;
}>();
</script>

<template>
  <header>
    <nav class="border-b py-4 flex justify-between">
      <div
        class="cursor-pointer inline-flex"
        @click="router.push('/')"
        v-html="brandLogo"
      />
      <NuxtLink
        class="hover:text-gray-600 items-center gap-1 font-medium py-1 px-2 hover:bg-gray-100 inline-block duration-300 rounded-lg"
        to="/snippets"
      >
        Snippets
      </NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts">
import brandLogo from "@/assets/svg/general/logo-joscode.svg?raw";

export default {
  name: "NavigationComponent",
};
</script>

<script lang="ts" setup>
const router = useRouter();
</script>

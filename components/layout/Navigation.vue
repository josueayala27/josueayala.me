<template>
  <header>
    <nav class="border-b py-4 flex justify-between">
      <div
        class="cursor-pointer inline-flex"
        @click="router.push('/')"
        v-html="brandLogo"
      />
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

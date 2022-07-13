<template>
  <div class="max-w-[42rem] mx-auto px-6">
    <header>
      <nav class="border-b py-4">
        <div
          @click="$router.push('/')"
          class="cursor-pointer inline-flex"
          v-html="require('@/assets/svg/general/logo-joscode.svg?raw')"></div>
      </nav>
    </header>
    <main class="py-4">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultComponent',
};
</script>

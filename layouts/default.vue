<template>
  <div>
    <header>
      <nav class="max-w-[42rem] mx-auto px-6">
        <div
          class="py-4"
          v-html="require('@/assets/svg/general/logo-joscode.svg?raw')"></div>
      </nav>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultComponent',
};
</script>

<template>
  <div class="flex items-center justify-center h-full flex-col">
    <div class="py-3"></div>
    <h1 class="text-[2.25em] font-extrabold">{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <router-link
      class="mt-2 font-semibold hover:text-pastel-green-600 transition-all"
      to="/">
      Go to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: ['error'],
};
</script>

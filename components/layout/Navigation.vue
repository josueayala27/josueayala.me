<template>
  <nav class="border-b py-4">
    <div
      @click="$router.push('/')"
      class="cursor-pointer inline-flex"
      v-html="require('@/assets/svg/general/logo-joscode.svg?raw')"></div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
};
</script>

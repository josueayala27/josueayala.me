<template>
  <nav class="border-b py-4 flex justify-between">
    <div
      @click="
        $router.push({
          name: `index___${$i18n.locale}`,
        })
      "
      class="cursor-pointer inline-flex"
      v-html="require('@/assets/svg/general/logo-joscode.svg?raw')"></div>
    <div>
      <nuxt-link
        class="hover:text-pastel-green-600 transition-all duration-300"
        to="/donate">
        Donate
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
};
</script>

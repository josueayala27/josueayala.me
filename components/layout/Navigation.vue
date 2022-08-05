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
    <div></div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  methods: {
    changeTheme() {
      localStorage.setItem('theme', 'dark');
    },
  },
};
</script>

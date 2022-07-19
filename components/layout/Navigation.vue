<template>
  <nav class="border-b py-4 flex justify-between">
    <div
      @click="$router.push('/')"
      class="cursor-pointer inline-flex"
      v-html="require('@/assets/svg/general/logo-joscode.svg?raw')"></div>
    <div>
      <!-- <Icon
        @click="changeTheme"
        class="cursor-pointer"
        size="1.8rem"
        name="sun" /> -->
    </div>
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

<template>
  <div class="h-screen justify-center flex items-center w-full flex-col">
    <button @click="login('google')">Login with google</button>
    <button @click="login('github')">Login with github</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: ['auth'],
  methods: {
    async login(provider) {
      const { user } = await this.$supabase.auth.signIn({ provider });
      console.log(user);
    },
  },
};
</script>

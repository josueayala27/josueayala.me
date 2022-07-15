<template>
  <div class="h-screen justify-center flex items-center w-full">
    <button @click="login">Login with google</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: ['auth'],
  methods: {
    async login() {
      const user = await this.$supabase.auth.signIn({ provider: 'google' });
      console.log(user);
    },
  },
};
</script>

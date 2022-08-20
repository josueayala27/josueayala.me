<template>
  <div class="prose">
    <div class="py-3"></div>
    <h1>Donate now!</h1>

    <section>
      <Toggle v-model="non" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'DonationPage',
  data() {
    return {
      non: false,
      amounts: [50, 100, 250, 500, 1000, 2500],
    };
  },
};
</script>

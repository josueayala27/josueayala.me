<template>
  <div>
    <article class="grid grid-cols-3 gap-3">
      <div
        class="p-5 border rounded-lg cursor-pointer"
        v-for="(amount, i) in amounts"
        :key="i">
        {{ amount | dolar }}
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'DonationPage',
  data() {
    return {
      amounts: [50, 100, 250, 500, 1000, 2500],
    };
  },
};
</script>

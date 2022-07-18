import vue from 'vue';

/* Dolar format */
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

vue.filter('dolar', (value: number): string => formatter.format(value));

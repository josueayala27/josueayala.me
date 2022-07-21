import vue from 'vue';

/* Dolar format */
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

vue.filter('dolar', (value: number): string => formatter.format(value));

/* First letter uppercase */
vue.filter(
  'up',
  (value: string): string => value.charAt(0).toUpperCase() + value.slice(1)
);

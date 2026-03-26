<template>
  <div
    v-html="icon"
    @click="handleClick()"
    :style="{ width: size, height: size }"
    class="fill-current relative z-0 align-top inline-flex"></div>
</template>

<script>
export default {
  name: 'IconComponent',
  props: {
    category: { type: String, default: 'outline' },
    name: { type: String, default: '' },
    size: { type: String, default: '1.2rem' },
    href: { type: String, default: '' },
  },
  computed: {
    icon() {
      return require(`@/assets/icons/${this.category}/${this.name}.svg?raw`);
    },
  },
  methods: {
    handleClick() {
      if (this.href) {
        window.open(this.href, '_blank');
        return;
      }
      this.$emit('click');
    },
  },
};
</script>

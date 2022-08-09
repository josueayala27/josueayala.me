<template>
  <div
    @click="click()"
    :class="{
      'bg-[#542E91]/10 border-l-[#542E91] border-l-[3px] text-[#542E91]': false,
    }"
    class="py-2 px-4 hover:bg-gray-100 whitespace-nowrap text-sm flex gap-x-2 transition-all duration-300 cursor-pointer">
    <slot name="icon" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DropdownItemComponent',

  methods: {
    click() {
      this.$emit('click');
      this.$parent.isActive = false;
    },
  },
};
</script>

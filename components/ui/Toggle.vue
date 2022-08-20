<template>
  <div
    :class="{
      'bg-pastel-green': value,
      'hover:bg-gray-200': !value,
    }"
    class="p-[5px] h-[28px] toggle transition-all duration-300 rounded-full min-w-[48px] inline-flex bg-gray-100 relative items-center">
    <input
      v-bind="{ value }"
      @input="({ target }) => $emit('input', target.checked)"
      class="absolute switch w-full h-full top-0 left-0 cursor-pointer opacity-0 z-50"
      type="checkbox" />
    <div
      :class="{
        'left-6': value,
      }"
      class="h-[20px] ball aspect-square ball rounded-full absolute bg-white"></div>
  </div>
</template>

<script>
export default {
  name: 'ToggleComponent',
  props: {
    value: { type: Boolean, default: false },
  },
};
</script>

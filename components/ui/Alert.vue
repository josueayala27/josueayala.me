<template>
  <div
    :class="{
      'bg-yellow-100  border-yellow-500': type === 'warning',
    }"
    class="p-5 rounded-r-lg relative border-l-[.2rem]">
    <div
      :class="{
        'text-yellow-500 bg-white shadow-md': type === 'warning',
      }"
      class="absolute -top-5 -left-5 w-auto rounded-full p-2 aspect-square inline-flex">
      <Icon :name="icon" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    type: { type: String, default: 'warning' },
    icon: { type: String, default: 'exclamation-circle' },
  },
};
</script>

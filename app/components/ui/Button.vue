<template>
  <button
    v-on="$listeners"
    :class="[...colors[color], ...sizes[size]]"
    class="bg-black text-white rounded-lg relative">
    <!-- Loading icon -->
    <div
      v-if="isLoading"
      class="absolute h-full inset-0 w-full flex items-center justify-center">
      <Icon class="animate-spin" name="load" />
    </div>

    <!-- Button content -->
    <div
      :class="{
        invisible: isLoading,
      }"
      class="flex justify-center gap-2 items-center">
      <slot name="icon" />
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    isLoading: { type: Boolean, default: false },
    color: { type: String, default: 'default' },
    size: { type: String, default: 'medium' },
  },
  data() {
    return {
      colors: {
        primary: ['bg-blue-500', 'text-white'],
        default: ['bg-red-500', 'text-white'],
      },

      sizes: {
        small: ['py-1', 'px-2', 'text-sm'],
        medium: ['py-3', 'px-4', 'text-base'],
        large: ['py-5', 'px-6', 'text-lg'],
      },
    };
  },
};
</script>

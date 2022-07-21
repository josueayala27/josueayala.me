<template>
  <button
    v-on="$listeners"
    class="bg-black text-white rounded-lg py-3 px-4 relative">
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
  },
};
</script>

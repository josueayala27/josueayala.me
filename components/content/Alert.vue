<template>
  <div
    :class="{
      'bg-yellow-100  border-yellow-500': type === 'warning',
    }"
    class="p-5 rounded-r-lg relative border-l-[.2rem]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    type: { type: String, default: "warning" },
    icon: { type: String, default: "exclamation-circle" },
  },
};
</script>

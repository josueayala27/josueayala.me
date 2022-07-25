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
      class="absolute -top-5 -left-5 w-auto rounded-full p-2 aspect-square">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AlertComponent',
  props: {
    type: { type: String, default: 'success' },
  },
};
</script>

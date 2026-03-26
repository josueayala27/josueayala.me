<template>
  <input
    v-bind="{ ...$attrs }"
    @input="({ target }) => $emit('input', target.value)"
    class="rounded-lg p-4 outline-none bg-gray-100" />
</template>

<script>
export default {
  name: 'InputComponent',
};
</script>

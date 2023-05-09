<template>
  <div class="p-3 bg-[#282a36] rounded-lg relative group">
    <div
      v-if="allowCopy"
      class="absolute opacity-0 group-hover:opacity-100 transition top-3 right-3 bg-white cursor-pointer rounded-lg p-2"
      @click="copyCode($attrs.code)"
    >
      <Icon size="24px" name="uil:copy" />
    </div>
    <slot />
  </div>
</template>

<script setup>
const attrs = useAttrs();

const allowCopy = ref(false);

if (attrs.meta) {
  allowCopy.value = attrs.meta
    ? attrs.meta
        .split(";")
        .find((attr) => attr.includes("allow-copy"))
        ?.split("=")[1] === String(true)
    : false;
}

/**
 *
 * @param {*} code
 */
const copyCode = async (code) => {
  await navigator.clipboard.writeText(code);
  console.log("Code copied successfully!");
};
</script>

<style>
pre {
  @apply overflow-auto scrollbar-hide;
}
</style>

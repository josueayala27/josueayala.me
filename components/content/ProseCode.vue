<template>
  <div class="p-4 bg-[#282a36] rounded-lg relative group">
    <div
      class="absolute grid place-items-center opacity-0 group-hover:opacity-100 transition top-3 right-3 hover:bg-gray-200 bg-white cursor-pointer rounded-lg p-2"
      @click="copyCode($attrs.code as string)"
    >
      <Icon class="text-[#282a36]" size="16px" name="uil:copy-alt" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const attrs = useAttrs() as any;
const { show } = useToast();

const allowCopy = ref(false);

if (attrs.meta) {
  allowCopy.value = attrs.meta
    ? attrs.meta
        .split(";")
        .find((attr: string) => attr.includes("allow-copy"))
        ?.split("=")[1] === String(true)
    : false;
}

/**
 *
 * @param {*} code
 */
const copyCode = async (code: string) => {
  await navigator.clipboard.writeText(code);
  show("Copied to clipboard");
};
</script>

<style>
pre {
  @apply overflow-auto scrollbar-hide;
}
</style>

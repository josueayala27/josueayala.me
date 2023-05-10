<template>
  <div
    class="flex cursor-pointer items-center font-medium gap-3 text-sm bg-pastel-green-100 hover:bg-pastel-green-200 duration-300 py-2 px-3 rounded-full ring-[1.5px] ring-pastel-green-400"
  >
    <Suspense>
      <Icon size="24px" class="text-pastel-green-600" name="uis:check-circle" />
    </Suspense>
    Copied to clipboard
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["close"]);

onMounted(() => {
  setTimeout(() => {
    emit("close");
  }, 3000);
});
</script>

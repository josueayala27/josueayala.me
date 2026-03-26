<template>
  <div
    class="relative overflow-hidden flex cursor-pointer items-center font-medium gap-3 text-sm bg-pastel-green-100 hover:bg-pastel-green-200 duration-300 py-2 px-3 rounded-full border-[2px] border-pastel-green-500"
    @click="closeToast"
  >
    <div
      class="loader absolute bottom-0 left-0 w-full h-[.2rem] bg-pastel-green-500"
    />
    <Suspense>
      <Icon size="24px" class="text-pastel-green-500" name="uis:check-circle" />
    </Suspense>
    {{ content }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{ content: string }>();
const emit = defineEmits(["close"]);

const timeOut = ref();

const closeToast = () => {
  clearTimeout(timeOut.value);
  emit("close");
};

timeOut.value = setTimeout(() => {
  emit("close");
}, 3000);
</script>

<style>
.loader {
  animation: toast-loading 3s linear forwards;
}

@keyframes toast-loading {
  0% {
    @apply w-[0%];
  }

  100% {
    @apply w-full;
  }
}
</style>

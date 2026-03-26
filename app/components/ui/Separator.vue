<template>
  <div :class="['flex justify-center', classes]">
    <div :style="{ width }" class="border-t"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SeparatorComponent" as string,
  props: {
    width: { default: "100%", type: String },
    classes: { type: Array, default: () => ["py-[20px]"] },
  },
};
</script>

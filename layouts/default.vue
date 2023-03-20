<template>
  <div class="max-w-[42rem] mx-auto flex flex-col min-h-[100vh] p-4">
    <LayoutNavigation />
    <main class="h-full flex-1 relative">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultComponent",
};
</script>

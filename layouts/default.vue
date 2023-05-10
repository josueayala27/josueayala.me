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

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>

<template>
  <div ref="lottieContainer" class="rounded-lg border h-[30vh]"></div>
</template>

<script lang="ts" setup>
import lottie from "lottie-web";

const props = defineProps<{ src: string }>();

const lottieContainer = ref();

const loadLottie = (src: string) => {
  const animation = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${window.location.origin}/animations/${src}.json`,
  });

  animation.play();
};

onMounted(() => {
  loadLottie(props.src);
});
</script>

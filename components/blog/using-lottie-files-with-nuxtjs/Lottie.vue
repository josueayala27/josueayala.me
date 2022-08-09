<template>
  <div ref="lottie-container" class="rounded-lg border h-[30vh]"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'LottieComponent',
  props: {
    src: { type: String, default: '' },
  },
  mounted() {
    this.loadLottie('lottie-container', this.src);
  },
  methods: {
    loadLottie(reference, file) {
      const animation = lottie.loadAnimation({
        container: this.$refs[reference],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${window.location.origin}/animations/${file}.json`,
      });

      animation.play();
    },
  },
};
</script>

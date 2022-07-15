<template>
  <div
    v-html="icon"
    @click="$emit('click')"
    :style="{ width: size, height: size }"
    class="fill-current relative z-0 align-top inline-flex"></div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'IconComponent',
  props: {
    category: { type: String, default: 'outline' },
    name: { type: String, default: '' },
    size: { type: String, default: '1.2rem' },
  },
  setup(props) {
    const icon = computed(() =>
      require(`@/assets/icons/${props.category}/${props.name}.svg?raw`)
    );
    return { icon };
  },
});
</script>

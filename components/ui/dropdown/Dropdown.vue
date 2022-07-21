<template>
  <div class="inline-flex flex-col" v-click-outside="() => (isActive = false)">
    <div class="inline-flex" @click="isActive = !isActive" ref="dropdown">
      <slot />
    </div>
    <div
      :class="{
        hidden: !isActive,
      }"
      class="absolute w-[10rem] bg-white border font-inter py-2 rounded-[4px] z-30"
      ref="content">
      <slot name="items" />
    </div>
  </div>
</template>

<script>
import {
  computePosition,
  flip,
  offset,
  shift,
  autoUpdate,
  hide,
} from '@floating-ui/dom';

export default {
  name: 'DropdownComponent',

  props: {
    position: { type: String, default: 'bottom-end' },
  },

  data() {
    return {
      isActive: false,
      config: {
        placement: this.position,
        middleware: [hide(), offset({ mainAxis: 10 }), flip(), shift()],
      },
    };
  },

  mounted() {
    const { dropdown } = this.$refs;
    const { content } = this.$refs;

    autoUpdate(dropdown, content, async () => {
      const { x, y } = await computePosition(dropdown, content, {
        ...this.config,
      });

      Object.assign(content.style, { top: `${y}px`, left: `${x}px` });
    });
  },
};
</script>

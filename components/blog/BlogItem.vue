<template>
  <div v-bind="{ ...$attrs }" class="cursor-pointer group">
    <h2 class="group-hover:text-[#66D88C] transition-all duration-300">
      {{ data.title }}
    </h2>
    <p>
      {{ data.description }}
    </p>
    <div class="flex items-center gap-1">
      <router-link :to="`/blog${data.path}`"> Read more </router-link>
      <icon
        class="opacity-0 text-[#66D88C] group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300"
        name="chevron-double-right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'BlogItemComponent',
  props: {
    data: { type: Object },
  },
});
</script>

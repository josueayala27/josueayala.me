<template>
  <div>
    <a :href="url" target="_blank"> <slot /> </a>
    <Icon name="external-link" />
  </div>
</template>

<script>
export default {
  name: 'RedirectionComponent',
  props: {
    url: { type: String, default: '' },
  },
};
</script>

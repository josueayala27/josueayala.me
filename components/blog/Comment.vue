<template>
  <article class="flex flex-col gap-2 border-b py-5">
    <div class="flex gap-x-3 items-center">
      <img
        class="h-[3rem] w-[3rem] object-cover rounded-full overflow-hidden"
        :src="data.user.raw_user_meta_data.picture"
        :alt="`${data.user.raw_user_meta_data.full_name} image`" />
      <div class="flex flex-col text-sm">
        <span class="font-semibold">
          {{ data.user.raw_user_meta_data.full_name }}
        </span>
        <span>
          {{ $dayjs(data.created_at).fromNow() }}
        </span>
      </div>
    </div>
    <span v-html="data.content" class="text-sm"> </span>
  </article>
</template>

<script>
export default {
  name: 'dataComponent',
  props: {
    data: { type: Object, default: () => ({}) },
  },
};
</script>

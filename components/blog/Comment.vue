<template>
  <article class="flex flex-col gap-2 border-b py-5">
    <div class="flex justify-between">
      <div class="flex gap-x-3 items-center">
        <!-- User image -->
        <img
          class="h-[3rem] w-[3rem] object-cover rounded-full overflow-hidden"
          :src="data.user.raw_user_meta_data.picture"
          :alt="`${data.user.raw_user_meta_data.full_name} image`" />

        <!-- User & comment information -->
        <div class="flex flex-col text-sm">
          <Caption class="font-semibold">
            {{ data.user.raw_user_meta_data.full_name }}
          </Caption>

          <Caption>
            {{ $dayjs(data.created_at).fromNow() | up }}
          </Caption>
        </div>
      </div>

      <!-- Comment options -->
      <Dropdown
        v-if="
          $supabase.auth.user() && $supabase.auth.user().id === data.user.id
        ">
        <Icon class="cursor-pointer" name="dots-vertical" />
        <template #items>
          <DropdownItem>
            <template #icon>
              <Icon name="pencil-alt" />
            </template>
            Edit
          </DropdownItem>
          <DropdownItem
            @click="$emit('delete', data)"
            class="hover:text-red-500">
            <template #icon>
              <Icon name="trash" />
            </template>
            Delete
          </DropdownItem>
        </template>
      </Dropdown>
    </div>
    <span class="text-sm"> {{ data.content }}</span>
  </article>
</template>

<script>
export default {
  name: 'CommentComponent',
  props: {
    data: { type: Object, default: () => ({}) },
  },
};
</script>

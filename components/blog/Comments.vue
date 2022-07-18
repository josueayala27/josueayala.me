<template>
  <div
    class="fixed top-0 left-0 w-[22rem] bg-white border-r h-full p-5 flex flex-col gap-5 overflow-auto">
    <article class="flex flex-col gap-y-3" v-for="(comment, i) in 3" :key="i">
      <div class="flex gap-x-3 items-center">
        <img
          class="h-[3rem] w-[3rem] object-cover"
          src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/17be4dd08c5417027a544816a909fcf8/979c9db7-f35c-4beb-9df9-6c8b3c04d1b3_rw_600.gif?h=58f48393c5b7fbd65d39f6ab7e9b095b"
          alt="Josué ayala image" />
        <div class="flex flex-col text-sm">
          <span class="font-semibold">Josué Ayala</span>
          <span>3 years ago</span>
        </div>
      </div>
      <span class="text-sm">
        Awesome nice blog, how is the build in compilation time?
      </span>
      <div class="flex gap-2">
        <Icon size="1.8rem" class="cursor-pointer" name="heart" />
        <Icon size="1.8rem" class="cursor-pointer" name="annotation" />
      </div>
      <div class="border-b"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CommentsComponent',
};
</script>

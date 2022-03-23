<template>
  <h2
    class="
      max-w-md
      mb-6
      font-bold
      tracking-tight
      sm:leading-none
      xl:max-w-lg
      title
      dark:text-white
    "
  >
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
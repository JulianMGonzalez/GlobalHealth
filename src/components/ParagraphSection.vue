<template>
  <p class="text-lg nav dark:text-white">
    {{description}}
  </p>
</template>

<script>
export default {
    props:{
        description: {
            type: String
        }
    }
};
</script>

<style>
</style>
<template>
  <p class="text-lg nav">
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
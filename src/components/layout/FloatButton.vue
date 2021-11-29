<template>
  <div class="fixed right-0 bottom-0">
    <button
      class="
        w-14
        h-14
        m-5
        bg-blue-600
        hover:bg-blue-700
        rounded-full
        hover:animate-spin
        active:shadow-lg
        shadow
        transition
        ease-in
        duration-200
        transform hover:scale-110 motion-reduce:transform-none
        focus:outline-none
      "
      onclick="window.open('https://wa.me/573232477487', '_blank')"
    >
      <font-awesome-icon
              :icon="['fab', 'whatsapp']"
              size="lg"
              class="text-green-100 animate-bounce"
          />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
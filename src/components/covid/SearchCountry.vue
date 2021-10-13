<template>
  <form
    @submit.prevent="searchCountry"
    class="
      mx-auto
      w-1/2
      h-10
      my-4
      px-4
      pr-2
      border
      rounded-full
      flex
      justify-center
      items-center
    "
  >
    <input
      type="search"
      name="search"
      v-model.trim="buscar"
      placeholder="Buscar pais"
      class="
        appearance-none
        w-full
        outline-none
        focus:outline-none
        active:outline-none
      "
    />
    <button
      type="submit"
      class="ml-1 outline-none focus:outline-none active:outline-none"
    >
      <font-awesome-icon icon="search" class="text-blue-900"  />
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup(props, {emit}){
    const buscar = ref('')
    const searchCountry = () => {
      if(buscar.value === ""){
        return
      }
      emit("buscar", buscar.value);
    }
    return{
      buscar, searchCountry
    }
  }
};
</script>
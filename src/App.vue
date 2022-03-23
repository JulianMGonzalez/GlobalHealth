<template>
  <div id="nav">
    <NavbarComponent />
  </div>
  <router-view class=""/>
  <notifications position="bottom right" width="400"/>
  <FooterComponent />
  <FloatButton />
</template>

<script>
import NavbarComponent from "./components/layout/NavBar/NavbarComponent.vue";
import FooterComponent from "@/components/layout/Footer/FooterComponent.vue";
import FloatButton from '@/components/layout/FloatButton.vue';
import { onBeforeMount } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  components: {
    NavbarComponent,
    FooterComponent,
    FloatButton
  },
  setup(){
    const store = useStore()
    onBeforeMount(()=>{
      store.dispatch('initTheme')
    })
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
.title {
  font-family: "Montserrat", sans-serif;
}
.nav {
  font-family: 'Urbanist', sans-serif;
}
</style>


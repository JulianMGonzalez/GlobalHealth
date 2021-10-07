<template>
  <div class="about">
    <ServicesAccordion />
    <section>
      <div
        class="
          flex flex-col
          space-y-2
          items-start
          max-w-max
          mx-auto
          justify-center
          bg-gray-50
          rounded-xl
          border border-gray-200
          p-6
          shadow-sm
        "
      >
        <img src="@/assets/login.jpg" alt="" class="w-24 rounded-xl" />
        <h1 class="text-blue-600 font-bold text-xl title">Dr.Julian, Ph.D</h1>
        <div>
          <p class="text-gray-700 text-sm font-semibold opacity-80 nav">
            +6500 Pacientes
          </p>
          <p class="text-gray-700 text-sm opacity-80 nav">Globalhealth</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ServicesAccordion from "@/components/about/servicesAccordion.vue";
export default {
  components: {
    ServicesAccordion,
  },
};
</script>
<style scoped>
.about{
  background-image: url('~@/assets/bg-service2.png');
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
}
</style>

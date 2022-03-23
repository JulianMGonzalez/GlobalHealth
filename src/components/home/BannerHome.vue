<template>
  <div class="relative flex items-center h-full z-0">
    <div class="absolute bg-blue-100 w-full h-4/6 top-0 rounded-b-3xl dark:bg-gray-800"></div>
    <div class="w-full z-10 mt-36">
      <transition appear name="list">
        <div class="w-5/6 mx-auto rounded-md shadow-2xl bg-white dark:bg-gray-700">
          <div
            class="
              px-4
              py-20
              mx-auto
              sm:max-w-xl
              md:max-w-full
              lg:max-w-screen-xl
              md:px-24
              lg:px-8
              lg:py-10
            "
          >
            <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
              <div>
                <img
                  class="h-full w-full md:w-auto object-cover"
                  src="@/assets/banner.png"
                  alt="banner landing page"
                />
              </div>
              <div class="flex flex-col justify-center">
                <div class="max-w-xl mb-6">
                  <TitleSection
                    title="Bienvenidos a nuestra plataforma de salud, Mejora tu experiencia en tramites."
                    class="text-3xl text-gray-600 md:text-center"
                  />
                  <ParagraphSection
                    description="Nos comprometemos en mejorar tu experiencia con cualquier
                    tipo de entidades de salud, a través de nuestro servicios
                    que grantizan una nueva forma de atender a nuestros pacientes de forma digital y eficaz."
                    class="text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ParagraphSection from "../ParagraphSection.vue";
import TitleSection from "../TitleSection.vue";
export default {
  components: { TitleSection, ParagraphSection },
  name: "BannerHome",
};
</script>
<style scoped>
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.6s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.list-move {
  transition: all 0.3s ease;
}
</style>



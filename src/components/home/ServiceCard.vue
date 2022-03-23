<template>
  <div
    class="
      px-4
      my-10
      py-10
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-10
    "
  >
    <div class="flex flex-wrap text-center mb-6 md:mb-10">
      <div class="lg:w-1/2">
        <TitleSection
          title="Nuestros servicios siempre estarán aquí!"
          class="text-gray-600 text-4xl"
        />
      </div>
      <div class="lg:w-1/2">
        <ParagraphSection description="Nuestro servicios se enfocan en mejorar su atención en salud, evitando
          tramites y demoras que obstaculizan una buena prestacíon de salud." class="text-xl text-gray-600"/>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-center">
      <div class="mx-10" v-for="item in servicesCard" :key="item">
        <div class="md:flex md:justify-center md:space-x-8">
          <div
            class="
              mt-16
              py-4
              px-4
              w-72
              bg-white
              rounded-xl
              border-2 border-gray-100
              hover:shadow-blue
              transform
              hover:scale-110
              transition
              duration-500
              mx-auto
              md:mx-0
              dark:bg-gray-600
              dark:border-gray-500
            "
          >
            <div class="w-sm text-center">
              <font-awesome-icon
                :icon="item.icon"
                size="lg"
                spin
                class="text-blue-600"
              />
              <div class="mt-4 text-blue-600 text-center">
                <h1 class="text-xl font-bold nav dark:text-gray-50">{{ item.name }}</h1>
                <ParagraphSection :description="item.abstract" class="mt-5 text-gray-600"/>
                <router-link
                  :to="item.href"
                  class="
                    block
                    my-8
                    mb-4
                    py-2
                    px-14
                    border-2 border-blue-100
                    rounded-full
                    bg-blue-600
                    text-white
                    tracking-widest
                    hover:bg-white
                    hover:text-blue-600
                    transition
                    duration-200
                    dark:border-gray-500
                  "
                >
                  Más
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ParagraphSection from '../ParagraphSection.vue';
import TitleSection from "../TitleSection.vue";
const servicesCard = [
  {
    name: "Historial clinico",
    abstract:
      "Podrás visualizar de forma fácil y sencilla toda la documentación digital de tu historial clinico.",
    href: "/",
    icon: "stethoscope",
  },
  {
    name: "Noticias de salud",
    abstract:
      "Te actulizaremos diariamente de las noticias que comprendren la salud a nivel nacional e internacional.",
    href: "/noticias",
    icon: "newspaper",
  },
  {
    name: "Covid",
    abstract:
      "Tendrás las posibilidad de visulizar en tiempo real los casos nuevos, muertos y recuperados por covid en colombia y en todo el mundo.",
    href: "/covid-noticias",
    icon: "virus",
  },
];
export default {
  components: { TitleSection, ParagraphSection },
  setup() {
    return {
      servicesCard,
    };
  },
};
</script>
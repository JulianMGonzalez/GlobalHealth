<template>
  <div
      class="
        min-h-screen
        flex flex-col
        justify-center
        items-center
        rounded-b-lg
        md:space-x-10
        mx-auto
        md:flex-row
        lg:-mt-28
        lg:px-36
      "
    >
      <div class="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
        <img
          src="https://images.pexels.com/photos/6129494/pexels-photo-6129494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          class="object-cover object-center rounded-lg"
          alt="doctor"
        />
      </div>
      <div class="w-full max-w-lg p-3 rounded-2xl">
        <div class="text-center mb-6 md:mb-10">
          <TitleSection title="Nuestros servicios" class="text-blue-500 text-4xl"/>
        </div>
        <Disclosure
          v-slot="{ open }"
          v-for="(item, i) in servicesAccordion"
          :key="i"
        >
          <DisclosureButton
            class="
              shadow-xl
              flex
              justify-between
              w-full
              mt-2
              px-5
              py-4
              text-sm
              font-medium
              text-left 
              text-blue-900
              rounded-lg
              bg-white
              hover:bg-blue-50
              focus:outline-none
              focus-visible:ring
              focus-visible:ring-purple-500
              focus-visible:ring-opacity-75
            "
          >
            <div class="flex">
              <font-awesome-icon icon="user" class="w-5 h-5 text-blue-500" />
              <span class="title ml-2">{{ item.name }}</span>
            </div>
            <font-awesome-icon
              icon="arrow-down"
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 text-blue-500"
            />
          </DisclosureButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <DisclosurePanel
              class="
                px-4
                pt-4
                pb-2
                text-sm text-gray-500
                shadow-xl
                rounded-b-2xl
                nav
              "
            >
              {{ item.resumen }}
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import TitleSection from '@/components/TitleSection.vue';
const servicesAccordion = [
  { name: "Noticias", resumen: "La actulidad en salud en colombia siempre estara aqui" },
  { name: "Los mejores doctores", resumen: "Tendrás una lista con todos los doctores que estaran disponibles para ti!" },
  { name: "Informes del covid", resumen: "Mejores medicamentos" },
  { name: "Historial clinico", resumen: "Podras ver tu historial clinico actualizado" },
];
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TitleSection,
  },
  setup() {
    return {
      servicesAccordion,
    };
  },
};
</script>
<template>
  <section class="bg-blue-50 mt-6 py-1 rounded-xl dark:bg-gray-600">
    <div class="container px-5 my-16 mx-auto">
      <div class="text-center max-w-xl mx-auto">
        <TitleSection
          title="Aquí todos son escuchados"
          class="text-gray-600 text-3xl md:text-5xl"
        />
        <ParagraphSection
          class="mb-5 text-gray-600"
          description="GlobalHealth comprende las necesidades de nuestros usuarios por lo
          cual siempre escucharemos sus sugerencias para mejorar cada día."
        />
        <div class="text-center mb-10">
          <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="lg:w-1/3 lg:mb-0 md:py-4 px-4"
          v-for="item in arrayTestiomonials"
          :key="item"
        >
          <!-- component -->
          <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 dark:bg-gray-700">
            <div class="flex justify-center md:justify-end -mt-16">
              <img
                class="
                  w-20
                  h-20
                  object-cover
                  rounded-full
                  border-2 border-indigo-500
                "
                :src="item.imagen"
                alt="profile photo"
              />
            </div>
            <div>
              <h2 class="text-gray-800 text-2xl font-semibold dark:text-gray-50">
                {{ item.nombre }}
              </h2>
              <ParagraphSection
                class="mt-2 text-gray-600 italic font-light"
                :description="item.testimonio"
              />
            </div>
            <div class="flex justify-end mt-4">
              <p class="font-medium text-blue-500">
                {{ item.fecha.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ParagraphSection from "../ParagraphSection.vue";
import TitleSection from "../TitleSection.vue";
const arrayTestiomonials = [
  {
    imagen: "https://electronicssoftware.net/wp-content/uploads/user.png",
    testimonio:
      "Es mi primera experiencia con una plataforma de este tipo,pero para mi opinión esta se caracteriza por ser una forma fácil de agilizar estos tramites burocráticos que se demoran una eternidad de manera presencial.",
    nombre: "Juan diaz",
    fecha: new Date(2020, 2, 12),
  },
  {
    imagen:
      "https://i.pinimg.com/originals/72/cd/96/72cd969f8e21be3476277d12d44c791c.png",
    testimonio:
      "Me encanto este tipo de plataforma la cual unifica diferentes servicios esenciales que componen la prestacion de salud, mi servicio favorita es poder agendar una cita médica.",
    nombre: "Jesus Garcia",
    fecha: new Date(2019, 3, 9),
  },
  {
    imagen:
      "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    testimonio:
      "Llevo un tiempo utlizando esta tipo de plataforma, la cualidad más destacable se sustentan en la manera en la cual comprender y escuchan las necesidades de cada usuario, la cual la toman como una referencia para mejorar.",
    nombre: "Isabella Martinez",
    fecha: new Date(2010, 2, 8),
  },
];

export default {
  name: "TestimonialsHome",
  components: {
    TitleSection,
    ParagraphSection,
  },
  setup() {
    return {
      arrayTestiomonials,
    };
  },
};
</script>

<style>
</style>
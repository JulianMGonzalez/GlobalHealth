<template>
  <div class="about">
    <ServicesAccordion />
    <section>
      <div class="flex justify-center items-center">
        <div
          v-for="doctor in infoDoctors"
          :key="doctor.name"
          class="
            bg-white
            my-12
            pb-6
            w-full
            justify-center
            items-center
            overflow-hidden
            md:max-w-sm
            rounded-lg
            shadow-sm
            mx-auto
          "
        >
          <div class="relative h-40">
            <img
              class="absolute h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
          </div>
          <div
            class="
              relative
              shadow
              mx-auto
              h-24
              w-24
              -my-12
              border-white
              rounded-full
              overflow-hidden
              border-4
            "
          >
            <img class="object-cover w-full h-full" :src="doctor.avatar" />
          </div>
          <div class="mt-16">
            <h1 class="text-lg text-center font-semibold">
              {{ doctor.name }}
            </h1>
          </div>
          <p class="text-center">{{ doctor.description }}</p>
          <div class="mt-6 pt-3 flex flex-wrap mx-6 border-t">
            <div
              v-for="(target, i) in doctor.targets"
              :key="i"
              class="
                text-xs
                mr-2
                my-1
                uppercase
                tracking-wider
                border
                px-2
                text-indigo-600
                border-indigo-600
                hover:bg-indigo-600
                hover:text-indigo-100
                cursor-default
              "
            >
              {{ target }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ServicesAccordion from "@/components/about/servicesAccordion.vue";
const infoDoctors = [
  {
    name: "Carlos Ortiz",
    description: "Example for info page",
    avatar:
      "https://images.vexels.com/media/users/3/151709/isolated/preview/098c4aad185294e67a3f695b3e64a2ec-icono-de-avatar-de-doctor.png",
    targets: ["Corazon", "Cerebro"],
  },
  {
    name: "Carlos Ortiz",
    description: "Example for info page",
    avatar:
      "https://images.vexels.com/media/users/3/151709/isolated/preview/098c4aad185294e67a3f695b3e64a2ec-icono-de-avatar-de-doctor.png",
    targets: ["Corazon", "Cerebro"],
  },
  {
    name: "Carlos Ortiz",
    description: "Example for info page",
    avatar:
      "https://images.vexels.com/media/users/3/151709/isolated/preview/098c4aad185294e67a3f695b3e64a2ec-icono-de-avatar-de-doctor.png",
    targets: ["Corazon", "Cerebro"],
  },
];
export default {
  components: {
    ServicesAccordion,
  },
  setup() {
    return {
      infoDoctors,
    };
  },
};
</script>
<style scoped>
.about {
  background-image: url("~@/assets/bg-service2.png");
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
}
</style>

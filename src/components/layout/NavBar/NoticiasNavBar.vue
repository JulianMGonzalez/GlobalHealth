<template>
  <div v-if="design">
    <Popover class="relative" v-slot="{ open }">
      <PopoverButton
        :class="[
          open ? 'text-gray-900 dark:text-gray-400' : 'text-gray-500 dark:text-gray-50',
          'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        ]"
      >
        <span>Salud</span>
        <font-awesome-icon
          icon="chevron-down"
          :class="[
            open ? 'text-gray-600' : 'text-gray-400',
            'ml-2 h-5 w-5 group-hover:text-gray-500',
          ]"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <PopoverPanel
          class="
            absolute
            left-1/2
            transform
            -translate-x-1/2
            mt-3
            px-2
            w-screen
            max-w-md
            sm:px-0
          "
        >
          <div
            class="
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
              overflow-hidden
            "
          >
            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <router-link
                v-for="item in resources"
                :key="item.name"
                :to="item.href"
                class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
              >
                <font-awesome-icon
                  :icon="item.icon"
                  class="flex-shrink-0 h-6 w-6 text-blue-600"
                  aria-hidden="true"
                />
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ item.description }}
                  </p>
                </div>
              </router-link>
            </div>
            <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
              <div>
                <h3
                  class="
                    text-sm
                    tracking-wide
                    font-medium
                    text-gray-500
                    uppercase
                  "
                >
                  Posts de ayuda
                </h3>
                <ul class="mt-4 space-y-4">
                  <li
                    v-for="post in recentPosts"
                    :key="post.id"
                    class="text-base truncate"
                  >
                    <a
                      :href="post.href"
                      class="font-medium text-gray-900 hover:text-gray-700"
                    >
                      {{ post.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-5 text-sm">
                <a
                  href="#"
                  class="font-medium text-blue-900 hover:text-blue-700"
                >
                  Ver todos <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
  <div v-else>
    <div class="grid grid-cols-2 gap-y-4 gap-x-8">
      <router-link
        v-for="item in resources"
        :key="item.name"
        :to="item.href"
        class="text-base font-medium text-gray-900 hover:text-gray-700 nav"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const resources = [
  {
    name: "Centro de Ayudas",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: "info",
  },
  {
    name: "Doctores",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: "book-medical",
  },
  {
    name: "Covid",
    description: "Estadisticas de los casos activos en Covid-19",
    href: "/covid-noticias",
    icon: "shield-virus",
  },
];

const recentPosts = [
  { id: 1, name: "Blog de ayuda", href: "#" },
  {
    id: 2,
    name: "Blog de ayuda",
    href: "#",
  },
  { id: 3, name: "Blog de ayuda", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  props: {
    responsive: Boolean,
  },
  setup(props) {
    return {
      design: props.responsive,
      resources,
      recentPosts,
    };
  },
};
</script>

<style>
</style>
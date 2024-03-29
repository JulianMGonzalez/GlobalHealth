<template>
  <Popover class="relative z-50 nav dark:bg-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          md:justify-start md:space-x-10
        "
      >
        <div
          class="
            flex
            lg:w-0 lg:flex-1
            items-center
            justify-between
            space-x-10
            nav
          "
        >
          <a href="/">
            <span class="sr-only">GlobalHealth</span>
            <img
              v-if="store.state.User.theme === 'dark'"
              class="h-8 w-auto sm:h-10"
              src="@/assets/logo_white_large.png"
              alt="globalHealth"
            />
            <img
              v-else
              class="h-8 w-auto sm:h-10"
              src="@/assets/logo.svg"
              alt="globalHealth"
            />
          </a>
          <PopoverGroup as="nav" class="hidden md:flex space-x-10">
            <router-link
              to="/noticias"
              class="
                text-base
                font-medium
                text-gray-500
                hover:text-gray-900
                dark:text-gray-50
              "
            >
              Noticias
            </router-link>
            <router-link
              to="/informacion"
              class="
                text-base
                font-medium
                text-gray-500
                hover:text-gray-900
                dark:text-gray-50
              "
            >
              Información
            </router-link>
            <NoticiasNavBar :responsive="true" />
          </PopoverGroup>
        </div>
        <NavProfile
          class="md:hidden"
          v-if="this.$store.state.User.LoggedIn"
          :image="
            this.$store.state.User.user
              ? this.$store.state.User.user.avatar
              : noPhoto
          "
        />
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-indigo-500
            "
          >
            <span class="sr-only">Abir Menu</span>
            <font-awesome-icon icon="bars" size="lg" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div
          class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 nav"
        >
          <NavProfile
            v-if="this.$store.state.User.LoggedIn"
            :image="
              this.$store.state.User.user
                ? this.$store.state.User.user.avatar
                : noPhoto
            "
          />
          <div v-else>
            <router-link
              to="/ingresa"
              class="
                ml-8
                whitespace-nowrap
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                border border-transparent border-blue-800
                rounded-md
                shadow-sm
                text-base
                font-medium
                bg-blue-900
                text-white
              "
            >
              Ingresa
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="@/assets/logo.svg" alt="logo" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Cerrar menu</span>
                  <font-awesome-icon
                    icon="times"
                    size="lg"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8 z-50">
                <router-link
                  v-for="item in solutions"
                  :key="item.name"
                  :to="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <NoticiasNavBar />
            <div class="nav" v-if="!this.$store.state.User.LoggedIn">
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Tienes usuario?
                {{ " " }}
                <a
                  href="/ingresa"
                  class="text-indigo-600 hover:text-indigo-500"
                >
                  Ingresa
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import NoticiasNavBar from "./NoticiasNavBar.vue";
import NavProfile from "../../profile/NavProfile.vue";
import noPhoto from "@/assets/noPhoto.png";
import { useStore } from 'vuex';


const solutions = [
  {
    name: "Noticias",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/noticias",
  },
  {
    name: "Doctores",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "Información",
    description: "Your customers' data will be safe and secure.",
    href: "/informacion",
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    NoticiasNavBar,
    NavProfile,
  },
  setup() {
    const store = useStore()
    return {
      solutions,
      noPhoto,
      store
    };
  },
};
</script>
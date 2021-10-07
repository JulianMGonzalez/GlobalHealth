<template>
  <div
    class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8"
  >
    <div
      class="
        align-middle
        rounded-lg
        inline-block
        w-full
        py-4
        overflow-hidden
        bg-white
        shadow-lg
        px-12
      "
    >
      <div class="flex justify-between">
        <div
          class="
            inline-flex
            border
            rounded
            w-7/12
            px-2
            lg:px-6
            h-12
            bg-transparent
          "
        >
          <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
            <div class="flex">
              <span
                class="
                  flex
                  items-center
                  leading-normal
                  bg-transparent
                  lg:px-3
                  py-2
                  whitespace-no-wrap
                  text-sm
                "
                ><font-awesome-icon :icon="['fas', 'search']" size="lg" />
              </span>
            </div>
            <input
              type="text"
              class="
                flex-shrink flex-grow flex-auto
                leading-normal
                tracking-wide
                w-px
                rounded
                px-3
                relative
                focus:outline-none
                text-xxs
                lg:text-xs
                text-gray-500
              "
              v-model="searchName"
              placeholder="Carlos"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        align-middle
        inline-block
        min-w-full
        shadow
        overflow-hidden
        bg-white
        px-8
        mt-2
        pt-3
        rounded-lg
      "
    >
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 leading-4 text-blue-500">ID</th>
            <th class="px-6 py-3 leading-4 text-blue-500 tracking-wider">
              Nombre Completo
            </th>
            <th class="px-6 py-3 leading-4 text-blue-500 tracking-wider">
              Email
            </th>
            <th class="px-6 py-3 leading-4 text-blue-500 tracking-wider">
              Celular
            </th>
            <th class="px-6 py-3 leading-4 text-blue-500 tracking-wider">
              Genero
            </th>
            <th class="px-6 py-3 leading-4 text-blue-500 tracking-wider">
              Creado
            </th>
            <th class="px-6 py-3 leading-4 text-blue-500 tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in nameFound" :key="item._id">
            <td class="px-6 py-4 whitespace-no-wrap border">
              <div class="flex items-center">
                <div>
                  <div class="text-sm text-gray-800">
                    {{ index + 1 }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border">
              <div class="text-sm text-blue-900">
                {{ item.name }}
              </div>
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                text-blue-900
                border
                text-sm
              "
            >
              {{ item.email }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                text-blue-900
                border
                text-sm
              "
            >
              {{ item.phone }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                text-blue-900
                border
                text-sm
              "
            >
              {{ item.gender }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border
                text-blue-900 text-sm
              "
            >
              {{ item.dateFormat }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                text-right
                border
                text-sm
              "
            >
              <router-link
                :to="'medical-history/' + item._id"
                class="
                  px-5
                  py-2
                  text-blue-500
                  rounded-lg
                  transition
                  duration-300
                  hover:text-blue-400 
                  focus:outline-none
                "
              >
                Detalles
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="
          sm:flex-1 sm:flex
          sm:items-center
          sm:justify-between
          mt-4
        "
      >
        <div>
          <p class="text-sm leading-5 text-blue-700">
            Mostrando
            <span class="font-medium">{{ nameFound.length }}</span>
            resultados
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUsers } from "@/services/getUsers";
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const searchName = ref("");
    const store = useStore();
    const users = ref([]);
    onMounted(async () => {
      users.value = await getUsers(store.state.User.user.rol._id);
    });
    const nameFound = computed(() =>
      users.value.filter((user) => {
        return user.name.toLowerCase().includes(searchName.value.toLowerCase());
      })
    );
    return {
      nameFound,
      searchName,
    };
  },
};
</script>
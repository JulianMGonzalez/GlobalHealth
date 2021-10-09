<template>
  <div v-for="(item, i) in medicalHistory" :key="i">
    <div class="rounded-lg my-5">
      <!-- card -->
      <div
        class="
          overflow-hidden
          shadow-lg
          transition
          duration-500
          ease-in-out
          transform
          hover:-translate-y-5
          hover:shadow-2xl
          rounded-lg
          h-90
          w-60
          md:w-80
          cursor-pointer
          m-auto
        "
      >
        <a href="#" class="w-full block h-full">
          <img
            alt="blog photo"
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            class="max-h-40 w-full object-cover"
          />
          <div class="bg-white w-full p-4 text-center">
            <TitleSection :title="item.subject" class="text-blue-500 text-2xl"/>
            <ParagraphSection :description="item.abstract" class="text-gray-600 font-light"/>
            <span
              class="
                py-3
                border-b-2
                border-gray-600
                text-xs text-white
                font-medium
              "
            >
            </span>
            <div class="flex items-center mt-2">
              <img
                class="w-10 h-10 object-cover rounded-full"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />

              <div class="pl-3">
                <div class="font-medium text-left">Julian</div>
                <div class="text-gray-600 text-sm">CTO of Supercars</div>
              </div>
            </div>
            <p class="mt-1 text-right text-sm text-gray-600">{{new Date(item.date).toDateString()}}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphSection from '../ParagraphSection.vue';
import TitleSection from '../TitleSection.vue';
export default {
  components: { TitleSection, ParagraphSection },
  props: {
    medicalHistory: {
      type: Array,
    },
  },
};
</script>
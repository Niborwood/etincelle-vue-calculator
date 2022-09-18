<script setup lang="ts">
import { ref } from "vue";

const lessonItems = ref([
  {
    id: "enfants-1",
    label: "Enfants 1",
    description: "Pour les startups",
    price: 220,
  },
  {
    id: "enfants-2",
    label: "Enfants 2",
    description: "Pour les entreprises en croissance",
    price: 220,
  },
  {
    id: "concours-13",
    label: "Concours - de 13 ans",
    description: "Pour les entreprises à l'échelle",
    price: 250,
  },
  {
    id: "ados-1",
    label: "Ados 1",
    description: "Pour les entreprises à l'échelle",
    price: 270,
  },
  {
    id: "avances",
    label: "Avancés",
    description: "Pour les entreprises à l'échelle",
    price: 270,
  },
]);
const checkedLessons = ref([]);
console.log(
  "🚀 ~ file: InputGroup.vue ~ line 37 ~ checkedLessons",
  checkedLessons.value
);
</script>

<template>
  <div class="text-2xl text-bold">Cours choisis</div>
  <div class="flex flex-row flex-wrap items-center gap-4">
    <div
      v-for="input in lessonItems"
      :key="input.id"
      class="p-8 border-2 rounded-lg cursor-pointer"
    >
      <input
        type="checkbox"
        class="hidden"
        :id="input.id"
        :value="input.id"
        v-model="checkedLessons"
      />
      <label class="cursor-pointer" :for="input.id">{{ input.label }}</label>
    </div>
  </div>
</template>

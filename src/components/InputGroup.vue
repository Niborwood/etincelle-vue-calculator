<script setup lang="ts">
import { ref } from "vue";
import { Circle, CheckCircle } from "lucide-vue-next";

const lessonItems = ref([
  {
    id: "enfants-1",
    label: "Enfants 1",
    details: "+ 4 ans",
    day: "Samedi",
    hours: "13h00 - 13h45",
    room: "Salle 4",
    price: 220,
  },
  {
    id: "enfants-2",
    label: "Enfants 2",
    details: "+ 8 ans",
    day: "Samedi",
    hours: "10h15 - 11h30",
    room: "Salle 4",
    price: 220,
  },
  {
    id: "concours-13",
    label: "Concours - de 13 ans",
    details: "+ 9 ans",
    day: "Samedi",
    hours: "11h00 - 13h00",
    room: "Salle 4",
    price: 250,
  },
  {
    id: "ados-1",
    label: "Ados 1",
    details: "+ 12 ans",
    day: "Vendredi",
    hours: "18h30 - 19h45",
    room: "Salle 5",
    price: 270,
  },
  {
    id: "avances",
    label: "Avancés",
    details: "Bon niveau technique exigé",
    day: "Mardi",
    hours: "20h00 - 21h30",
    room: "Salle 5",
    price: 270,
  },
  {
    id: "concours-13-18",
    label: "Concours 13 - 18 ans",
    details: "De 13 à 18 ans",
    day: "Vendredi",
    hours: "19h45 - 21h45",
    room: "Salle 5",
    price: 270,
  },
  {
    id: "atelier-chore",
    label: "Atelier chorégraphique",
    details: "Solo, duo, trio",
    hours: "13h45 - 15h15",
    day: "Samedi",
    room: "Salle 3",
    price: 270,
  },
]);
const checkedLessons = ref<string[]>([]);
</script>

<template>
  <div class="text-lg text-bold">Cours choisis</div>
  <div
    class="flex flex-col flex-1 gap-4 md:items-center md:flex-row md:flex-wrap"
  >
    <div
      v-for="input in lessonItems"
      :key="input.id"
      class="flex flex-row-reverse p-2 border-2 rounded-lg cursor-pointer hover:shadow-md md:basis-64 md:grow-0"
      :class="
        checkedLessons.includes(input.id) &&
        'border-orange-300 bg-gradient-to-tr from-orange-200/90 to-orange-200'
      "
    >
      <input
        type="checkbox"
        class="hidden"
        :id="input.id"
        :value="input.id"
        v-model="checkedLessons"
      />

      <div v-if="checkedLessons.includes(input.id)">
        <CheckCircle class="text-orange-500" />
      </div>
      <div v-else><Circle class="text-stone-900/50" /></div>

      <label
        class="flex-1 block p-4 space-y-2 transition-all cursor-pointer select-none"
        :for="input.id"
      >
        <div class="flex-1 font-bold">{{ input.label }}</div>
        <div>
          <div class="text-sm">{{ input.details }}</div>
          <div class="text-sm">{{ input.day }}, {{ input.hours }}</div>
          <div class="text-sm text-stone-900/60">{{ input.room }}</div>
        </div>
      </label>
    </div>
  </div>
</template>

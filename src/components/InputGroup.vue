<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const lessonItems = ref([
  {
    name: "enfants-1",
    label: "Enfants 1",
    description: "Pour les startups",
  },
  {
    name: "enfants-2",
    label: "Enfants 2",
    description: "Pour les entreprises en croissance",
  },
  {
    name: "concours-13",
    label: "Concours - de 13 ans",
    description: "Pour les entreprises à l'échelle",
  },
  {
    name: "ados-1",
    label: "Ados 1",
    description: "Pour les entreprises à l'échelle",
  },
  {
    name: "avances",
    label: "Avancés",
    description: "Pour les entreprises à l'échelle",
  },
]);
const choice = ref(lessonItems.value[0].name);
</script>

<template>
  <RadioGroup v-model="choice">
    <RadioGroupLabel>Cours choisis</RadioGroupLabel>
    <RadioGroupOption
      :key="input.name"
      v-for="input in lessonItems"
      v-slot="{ checked }"
      :value="input.name"
    >
      <span :class="checked ? 'bg-blue-200' : ''">{{ input.label }}</span>
    </RadioGroupOption>
  </RadioGroup>
</template>

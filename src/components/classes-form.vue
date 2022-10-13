<script setup lang="ts">
import { Circle, CheckCircle } from "lucide-vue-next";
import { TitleForm } from "./ui";
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();
</script>

<template>
  <div class="mb-4">
    <title-form>Quels sont les cours choisis par l'élève ?</title-form>
    <p v-show="!store.checkedClasses.length">
      Merci de sélectionner au moins un cours.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
    <div
      v-for="input in store.classesItems"
      :key="input.id"
      class="flex flex-row-reverse p-2 transition-all border-2 cursor-pointer rounded-xl hover:shadow-md md:basis-1/2 md:grow-0"
      :class="
        store.checkedClasses.includes(input.id) &&
        'border-orange-300 bg-gradient-to-tr from-orange-200/90 to-orange-200'
      "
    >
      <input
        type="checkbox"
        class="hidden"
        :id="input.id"
        :value="input.id"
        v-model="store.checkedClasses"
      />

      <div v-if="store.checkedClasses.includes(input.id)">
        <CheckCircle class="text-orange-500" />
      </div>
      <div v-else><Circle class="text-stone-900/50" /></div>

      <label
        class="flex-1 block p-4 space-y-2 transition-all cursor-pointer select-none"
        :for="input.id"
      >
        <div class="flex-1">
          <h3 class="text-2xl font-bold">{{ input.label }}</h3>
          <div class="">{{ input.price }} €</div>
        </div>
        <div class="text-sm">
          <div>{{ input.details }}</div>
          <div>{{ input.day }}, {{ input.hours }}</div>
          <div class="text-stone-900/60">{{ input.room }}</div>
        </div>
      </label>
    </div>
  </div>
</template>

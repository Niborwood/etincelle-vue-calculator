<script setup lang="ts">
import { Circle, CheckCircle } from "lucide-vue-next";
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();
</script>

<template>
  <h2 class="mb-4 text-2xl italic font-bold text-orange-800">
    Quels sont les cours choisis par l'élève ?
  </h2>

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
        <div class="flex-1 font-bold">
          <div>{{ input.label }}</div>
          <div>{{ input.price }} €</div>
        </div>
        <div>
          <div class="text-sm">{{ input.details }}</div>
          <div class="text-sm">{{ input.day }}, {{ input.hours }}</div>
          <div class="text-sm text-stone-900/60">{{ input.room }}</div>
        </div>
      </label>
    </div>
  </div>
</template>

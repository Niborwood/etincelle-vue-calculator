<script setup lang="ts">
import SummaryCard from "../components/ui/summary-card.vue";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
</script>

<template>
  <h2 class="mb-4 text-2xl italic font-bold text-orange-800">
    Récapitulatif de l'inscription
  </h2>
  <div class="my-8">
    <h3 class="mb-2 text-lg font-bold">Cours choisis</h3>
    <div class="flex flex-row flex-wrap gap-2">
      <div
        class="px-4 py-2 rounded-full bg-stone-200 text-stone-400/60"
        :class="
          store.checkedClasses.includes(classItem.id) &&
          'bg-orange-500 text-stone-100'
        "
        v-for="classItem in store.classesItems"
        :key="classItem.id"
      >
        {{ classItem.label }}
      </div>
    </div>
  </div>

  <div class="my-8">
    <h3 class="mb-2 text-lg font-bold">Tarifs</h3>
    <div class="grid w-full grid-cols-2 gap-4 rounded-xl auto-cols-fr">
      <summary-card
        title="Nombre de cours"
        :number="store.checkedClasses.length"
      />
      <summary-card
        title="Total des cours"
        :number="store.totalOfClasses"
        with-euros
      />
      <summary-card title="Adhésion par élève" :number="35" with-euros />
      <summary-card
        title="Budget costume"
        :number="store.costumeTotal"
        with-euros
      />
      <summary-card title="Réduction Marne & Gondoire" :number="0" with-euros />
      <summary-card
        title="Réduction plusieurs cours (5%)"
        :number="0"
        with-euros
      />
      <summary-card
        class="col-span-2 border-orange-300 bg-orange-300/60"
        title="Total de l'année"
        :number="store.total"
        with-euros
      />
    </div>
  </div>
</template>

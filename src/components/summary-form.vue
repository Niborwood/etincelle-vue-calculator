<script setup lang="ts">
import SummaryCard from "../components/ui/summary-card.vue";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
</script>

<template>
  <h2 class="mb-4 text-2xl italic font-bold text-orange-800">
    Récapitulatif de l'inscription
  </h2>
  <div class="flex flex-col w-full gap-4 md:flex-wrap md:flex-row rounded-xl">
    <summary-card
      title="Nombre de cours"
      :number="store.checkedClasses.length"
    />
    <summary-card
      title="Total de ces cours pour l'année"
      :number="
        store.classesItems
          .filter((item) => store.checkedClasses.includes(item.id))
          .reduce((acc, item) => acc + item.price, 0)
      "
      :withEuros="true"
    />
    <summary-card title="Adhésion 35€ par élève" :number="1" />
    <summary-card
      title="Budget costume par cours"
      :number="store.checkedClasses.length"
    />
  </div>
</template>

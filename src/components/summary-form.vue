<script setup lang="ts">
import { SummaryCard, TitleForm } from "../components/ui";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
</script>

<template>
  <title-form>Récapitulatif de l'inscription</title-form>
  <div class="mb-8">
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
    <div
      class="grid w-full grid-cols-1 gap-4 md:gap-y-6 sm:grid-cols-2 rounded-xl"
      v-auto-animate
    >
      <summary-card
        title="Nombre de cours"
        :number="store.checkedClasses.length"
      />
      <summary-card
        title="Total des cours"
        :number="store.totalOfClasses"
        with-euros
      />
      <summary-card
        title="Adhésion par élève"
        :number="35"
        with-euros
        helper-text="L'adhésion permet à l'élève d'être assuré et de participer aux activités de l'association."
      />
      <summary-card
        title="Budget costume"
        :number="store.costumeTotal"
        with-euros
        :helper-text="`Le total associe le budget fixe costume par cours (30 €) au nombre de cours choisis, soit ${store.checkedClasses.length} x 30 €.`"
      />
      <summary-card
        title="Réduction Marne & Gondoire"
        :number="store.locationDiscount"
        with-euros
        is-discount
        helper-text="La liste des communes éligibles est disponible sur le site de la Marne et Gondoire."
      />
      <summary-card
        title="Réduction plusieurs cours (5%)"
        :number="store.multiClassesDiscount"
        with-euros
        is-discount
        :helper-text="`${
          store.checkedClasses.length > 1
            ? `La réduction est appliquée au montant total des cours sans budget ni adhésion, soit 5% de ${store.totalOfClasses} €.`
            : 'La réduction n\'est pas applicable car vous n\'avez choisi qu\'un seul cours.'
        }`"
      />
      <summary-card
        title="Total de l'année"
        :number="store.total"
        with-euros
        is-total
      />
    </div>
  </div>
</template>

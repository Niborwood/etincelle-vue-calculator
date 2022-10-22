<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { Download, Mail } from "lucide-vue-next";
</script>

<template>
  <title-form>Pré-inscription complète</title-form>
  <div class="space-y-4">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi minus,
      vitae reiciendis cum tempore quis optio quia ipsa voluptatibus, accusamus
      dolores iste. Similique sapiente saepe quas, animi, obcaecati, fugit a
      repudiandae praesentium minus provident eos.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ut
      atque dolorem numquam dolorum saepe rerum!
    </p>

    <div class="p-8 text-lg font-bold bg-stone-200/80 rounded-xl">
      <p>Mairie de Bussy Saint Georges</p>
      <p>Pl. de la Mairie, 77600 Bussy-Saint-Georges</p>
    </div>
    <button
      type="button"
      class="flex items-center gap-2 p-4 text-xl font-semibold tracking-wider transition-shadow bg-orange-400 rounded-lg hover:shadow-md text-slate-100 hover:bg-orange-500"
    >
      <Download /> Télécharger le bulletin de&nbsp;pré-inscription
    </button>
  </div>
</template>

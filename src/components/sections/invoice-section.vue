<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { Download } from "lucide-vue-next";
import VueHtml2pdf from "html2pdf.js";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();

const exportToPDF = () => {
  const element = document.getElementById("invoice");
  const options = {
    margin: 0,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  VueHtml2pdf().from(element).set(options).save();
};
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
      @click="exportToPDF"
    >
      <Download /> Télécharger le bulletin de&nbsp;pré-inscription
    </button>

    <div class="p-2 border">
      <div id="invoice" class="p-2">
        <div class="flex gap-2 mb-8 text-7xl">Ecole de danse Etincelle</div>

        <!-- Informations -->
        <div class="flex items-center gap-2 mb-2">
          <p class="text-2xl text-orange-900 uppercase">
            Bulletin de pré-inscription web
          </p>
          <p class="italic text-stone-400">(à remplir en majuscules)</p>
        </div>

        <div class="">
          <div class="text-slate-600">
            <span class="text-lg text-stone-900">Nom :</span>
            {{ store.formValues.surname }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900">Prénom :</span>
            {{ store.formValues.name }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900">Date de naissance :</span>
            {{ new Date(store.formValues.birthday).toLocaleDateString() }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900"
              >Nom du responsable légal :</span
            >
            {{ store.formValues.resp_name }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900"
              >Portable du responsable légal :</span
            >
            {{ store.formValues.resp_phone }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900">Portable de l'élève :</span>
            {{ store.formValues.phone }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900"
              >Mail du responsable légal :</span
            >
            {{ store.formValues.resp_email }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900">Adresse :</span>
            {{ store.formValues.address }}
          </div>
          <div class="text-slate-600">
            <span class="text-lg text-stone-900">Ville :</span>
            {{ store.formValues.zipcode }}, {{ store.formValues.city }}
          </div>
        </div>

        <!-- Cours choisis -->
        <div class="my-4 space-y-1">
          <!-- Titre -->
          <div class="flex items-center gap-2 mb-2">
            <p class="text-2xl italic font-bold text-orange-900">
              Cours choisis
            </p>
            <p class="italic text-stone-400">
              (cochez la ou les cases correspondantes)
            </p>
          </div>

          <!-- Street & Lyrical -->

          <!-- Lyrical & Modern Jazz -->
        </div>
      </div>
    </div>
  </div>
</template>

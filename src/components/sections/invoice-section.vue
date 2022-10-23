<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { Download } from "lucide-vue-next";
// @ts-ignore
import VueHtml2pdf from "html2pdf.js";
import { useAppStore } from "@/stores/AppStore";
import { Square, CheckSquare } from "lucide-vue-next";
import { DisplayCheck } from "@/components/ui";
import { Classes } from "@/definitions/app.d";

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

    <div class="p-8 font-bold bg-stone-200/80 rounded-xl">
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
      <div id="invoice" class="p-2 text-sm">
        <div class="flex gap-2 mb-8 text-7xl">Ecole de danse Etincelle</div>

        <!-- Informations -->
        <div class="flex items-center gap-2 mb-2">
          <p class="text-xl text-orange-900 uppercase">
            Bulletin de pré-inscription web
          </p>
          <p class="italic text-stone-400">(à remplir en majuscules)</p>
        </div>

        <div class="">
          <div class="text-slate-600">
            <span class="text-stone-900">Nom :</span>
            <span class="pl-2 uppercase">{{ store.formValues.surname }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Prénom :</span>
            <span class="pl-2 uppercase">{{ store.formValues.name }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Date de naissance :</span>
            {{ new Date(store.formValues.birthday).toLocaleDateString() }}
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Nom du responsable légal :</span>
            <span class="pl-2 uppercase">{{ store.formValues.resp_name }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Portable du responsable légal :</span>
            <span class="pl-2 uppercase">{{
              store.formValues.resp_phone
            }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Portable de l'élève :</span>
            <span class="pl-2 uppercase">{{ store.formValues.phone }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Mail du responsable légal :</span>
            <span class="pl-2 uppercase">{{
              store.formValues.resp_email
            }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Adresse :</span>
            <span class="pl-2 uppercase">{{ store.formValues.address }}</span>
          </div>
          <div class="text-slate-600">
            <span class="text-stone-900">Ville :</span>
            <span class="pl-2 uppercase"
              >{{ store.formValues.zipcode }}, {{ store.formValues.city }}</span
            >
          </div>
        </div>

        <!-- Cours choisis -->
        <div class="my-4 space-y-1">
          <!-- Titre -->
          <div class="flex items-center gap-2 mb-2">
            <p class="text-xl italic font-bold text-orange-900">
              Cours choisis
            </p>
            <p class="italic text-stone-400">
              (cochez la ou les cases correspondantes)
            </p>
          </div>

          <!-- Street & Lyrical -->
          <div class="">
            <p class="italic font-bold">
              Street Jazz et Lyrical Jazz avec Marine Buron :
            </p>
            <table class="w-full table-fixed">
              <tr
                v-for="classItem in store.classesItems.filter(
                  (ci) =>
                    ![Classes.Concours13, Classes.AtelierChore].includes(ci.id)
                )"
                :key="classItem.id"
                class="text-stone-600"
              >
                <td class="px-2 py-0.5">
                  <display-check
                    :evaluate="store.checkedClasses.includes(classItem.id)"
                  />
                </td>
                <td>{{ classItem.label }}</td>
                <td>{{ classItem.details }}</td>
                <td>{{ classItem.day }}</td>
                <td>{{ classItem.hours }}</td>
                <td>{{ classItem.room }}</td>
                <td>{{ classItem.price }} €</td>
              </tr>
            </table>
          </div>

          <!-- Lyrical & Modern Jazz -->
          <div>
            <p class="italic font-bold">
              Lyrical Jazz et Modern'Jazz avec Marine Buron :
            </p>
            <table class="w-full table-fixed">
              <tr
                v-for="classItem in store.classesItems.filter((ci) =>
                  [Classes.Concours13, Classes.AtelierChore].includes(ci.id)
                )"
                :key="classItem.id"
                class="text-stone-600"
              >
                <td>
                  <display-check
                    :evaluate="store.checkedClasses.includes(classItem.id)"
                  />
                </td>
                <td>{{ classItem.label }}</td>
                <td>{{ classItem.details }}</td>
                <td>{{ classItem.day }}</td>
                <td>{{ classItem.hours }}</td>
                <td>{{ classItem.room }}</td>
                <td>{{ classItem.price }} €</td>
              </tr>
            </table>
          </div>

          <p
            class="text-sm italic text-center text-orange-500 underline underline-offset-2"
          >
            Ces cours se déroulent à l’espace Métiss’âge - 16 rue Jean Monnet,
            Bussy-Saint-Georges
          </p>
        </div>

        <!-- Récapitulatif de l'inscription -->
        <div>
          <!-- Titre -->
          <div class="flex items-center gap-2 mb-2">
            <p class="text-xl italic font-bold text-orange-900">
              Récapitulatif de l'inscription
            </p>
            <p class="italic text-stone-400">
              (cochez la ou les cases correspondantes)
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2">
          <div>
            <div class="text-slate-600">
              <span class="text-stone-900">Nombre de cours :</span>
              <span class="pl-2 uppercase">{{
                store.checkedClasses.length
              }}</span>
            </div>
            <div class="text-slate-600">
              <span class="text-stone-900">Total des cours pour l'année :</span>
              <span class="pl-2 uppercase">{{ store.total }} €</span>
            </div>
            <div class="text-slate-600">
              <span class="text-stone-900">Adhésion 35€ par élève :</span>
              <span class="pl-2 uppercase">1</span>
            </div>
            <div class="text-slate-600">
              <span class="text-stone-900"
                >Budget Costumes par cours, 25€ x
                <span class="pl-2 uppercase text-slate-600"
                  >{{
                    !store.checkedClasses.includes(Classes.AtelierChore)
                      ? store.checkedClasses.length
                      : store.checkedClasses.length - 1
                  }}
                </span>
                =
                <span class="pl-2 uppercase text-slate-600"
                  >{{ store.costumeTotal }} €</span
                >
              </span>
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <display-check :evaluate="!!store.locationDiscount" />
              <span class="">-10% pour les habitants de Marne et Gondoire</span>
            </div>
            <div class="flex items-center gap-2">
              <display-check :evaluate="store.checkedClasses.length > 1" />
              <span class=""
                >-5% sur le montant des cours si l’adhérent en suit
                plusieurs</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

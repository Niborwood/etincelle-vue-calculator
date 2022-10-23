<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { Download } from "lucide-vue-next";
// @ts-ignore
import VueHtml2pdf from "html2pdf.js";
import { useAppStore } from "@/stores/AppStore";
import { DisplayCheck } from "@/components/ui";
import { Classes, PaymentType } from "@/definitions/app.d";
import logoTitle from "@/assets/logo-title.png";

const store = useAppStore();

const exportToPDF = () => {
  const element = document.getElementById("invoice");
  const options = {
    margin: 0,
    filename: `${store.formValues.name} ${store.formValues.surname} - Pre-inscription Etincelle.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  VueHtml2pdf().from(element).set(options).save();
};

const nextYear = new Date().getFullYear() + 1;
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
      <!-- START OF INVOICE -->
      <div id="invoice" class="relative p-2 overflow-hidden text-sm">
        <!-- Top right decoration -->
        <div
          class="absolute rotate-[11deg] bg-yellow-200/50 -top-[720px] -right-[160px] w-[800px] h-[800px]"
        />
        <div class="relative z-20 flex gap-2 mb-8 text-7xl">
          <img
            :src="logoTitle"
            alt="Ecole de Danse Etincelle
        "
          />
        </div>

        <!-- Informations -->
        <div class="flex items-center gap-2">
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
        <div class="mt-1">
          <!-- Titre -->
          <div class="flex items-center gap-2">
            <p class="text-xl italic font-bold text-orange-900">
              Cours choisis
            </p>
            <p class="italic text-stone-400">
              (cochez la ou les cases correspondantes)
            </p>
          </div>

          <!-- Street & Lyrical -->
          <div class="">
            <p class="mb-1 italic font-bold">
              Street Jazz et Lyrical Jazz avec Marine Buron :
            </p>
            <table class="w-full text-xs table-fixed">
              <tr
                v-for="classItem in store.classesItems.filter(
                  (ci) =>
                    ![Classes.Concours13, Classes.AtelierChore].includes(ci.id)
                )"
                :key="classItem.id"
                class="text-stone-600"
              >
                <td class="w-8">
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
            <p class="mb-1 italic font-bold">
              Lyrical Jazz et Modern'Jazz avec Marine Buron :
            </p>
            <table class="w-full text-xs table-fixed">
              <tr
                v-for="classItem in store.classesItems.filter((ci) =>
                  [Classes.Concours13, Classes.AtelierChore].includes(ci.id)
                )"
                :key="classItem.id"
                class="text-stone-600"
              >
                <td class="w-8">
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

        <!-- Price details -->
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

        <!-- Payment -->
        <div class="mt-1">
          <!-- One time -->
          <div class="grid grid-cols-2 px-2 text-sm">
            <div class="flex items-center gap-2">
              <display-check
                :evaluate="store.paymentType === PaymentType.One"
              />
              Paiement en une fois :
            </div>
            <div class="grid grid-cols-2">
              <div class="text-stone-600">
                {{
                  store.paymentType === PaymentType.One
                    ? `${store.total} €`
                    : "..."
                }}
                (total)
              </div>
              <div>Le 15/09/{{ nextYear }}</div>
            </div>
          </div>

          <!-- Three times -->
          <div class="grid items-start grid-cols-2 px-2">
            <div class="flex gap-2">
              <display-check
                :evaluate="store.paymentType === PaymentType.Three"
              />
              Paiement en trois fois :
            </div>
            <div>
              <div class="grid grid-cols-2">
                <div class="text-stone-600">
                  {{
                    store.paymentType === PaymentType.Three
                      ? `${store.payments.first} €`
                      : "..."
                  }}
                  (1/3 total + adhésion)
                </div>
                <div>Le 15/09/{{ nextYear }}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="text-stone-600">
                  {{
                    store.paymentType === PaymentType.Three
                      ? `${store.payments.second} €`
                      : "..."
                  }}
                  (1/3 total + costumes)
                </div>
                <div>Le 01/11/{{ nextYear }}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="text-stone-600">
                  {{
                    store.paymentType === PaymentType.Three
                      ? `${store.payments.third} €`
                      : "..."
                  }}
                  (reste)
                </div>
                <div>Le 01/02/{{ nextYear + 1 }}</div>
              </div>
            </div>
          </div>

          <!-- Year total -->
          <div class="mt-2 font-bold text-center">
            <div>Total de l'année : {{ store.total }} €</div>
            <div class="text-xs font-normal">
              NB : pour les classes concours, le prix des inscriptions aux
              concours n’est pas inclus dans le total de l'année.
            </div>
          </div>
        </div>

        <!-- Medical -->
        <div class="flex items-center w-4/5 gap-4 m-auto mt-2 text-sm">
          <div class="flex items-start flex-1 gap-2">
            <display-check :evaluate="false" /> Le certificat médical de non
            contre-indication à la pratique de la danse a été transmis avec ce
            dossier
          </div>
          <div>ou</div>
          <div class="flex items-start flex-1 gap-2">
            <display-check :evaluate="false" /> Le certificat médical de non
            contre-indication à la pratique de la danse sera remis en main
            propre avant le 01/10/{{ nextYear }}
          </div>
        </div>
        <p
          class="text-sm italic text-center text-orange-500 underline underline-offset-2"
        >
          Les cours reprennent à partir du 15 septembre {{ nextYear }}
        </p>

        <!-- End, signature -->
        <div class="grid grid-cols-3 mt-1">
          <div class="ml-16">
            <p>
              <span class="font-semibold underline underline-offset-2"
                >Fait à :</span
              >
              ............
            </p>
            <p>
              <span class="font-semibold underline underline-offset-2"
                >Le :</span
              >
              ..............
            </p>
          </div>
          <div></div>
          <div>
            <p class="font-semibold underline underline-offset-2">
              Signature du responsable légal :
            </p>
          </div>
        </div>

        <div
          class="py-1 mt-8 text-xs font-semibold text-center bg-orange-500 text-stone-50"
        >
          <p>Ecole de danse Etincelle, Association Loi 1901 n°W932007295</p>
          <p>n°siret : 84066826300014 - APE : 8552Z</p>
          <p>Contact : marine@danse-etincelle.fr</p>
          <p>
            Etincelle, Mairie de Bussy-saint-Georges, 1 place de la mairie -
            77600 Bussy-saint-Georges
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

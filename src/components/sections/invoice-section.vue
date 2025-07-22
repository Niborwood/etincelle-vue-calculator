<script setup lang="ts">
import { TitleForm, RulesBlock } from "@/components/ui";
import { Download } from "lucide-vue-next";
// @ts-ignore
import VueHtml2pdf from "html2pdf.js";
import { useAppStore } from "@/stores/AppStore";
import { DisplayCheck } from "@/components/ui";
import { Classes, PaymentType } from "@/definitions/app.d";
import logoTitle from "@/assets/logo-title.png";
import { MedicalCertificate } from "@/definitions/app.d";

const store = useAppStore();

const exportToPDF = () => {
  const element = document.getElementById("invoice");
  const options = {
    margin: 0,
    filename: `${store.formValues.name} ${store.formValues.surname} - Pre-inscription Etincelle.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  VueHtml2pdf().from(element).set(options).save();
};

const currentYear = new Date().getFullYear();
const isProd = import.meta.env.PROD;
</script>

<template>
  <title-form>Pré-inscription complète</title-form>
  <div class="space-y-4">
    <p>
      Merci d'avoir rempli le formulaire de pré-inscription. Vous pouvez
      désormais cliquer sur le bouton
      <strong>Télécharger le bulletin de pré-inscription</strong> pour recevoir
      une version PDF des informations renseignées.
    </p>
    <p v-if="store.medicalCertificate === MedicalCertificate.Mail">
      Il doit être accompagné du certificat médical de non contre-indication à
      la pratique de la danse du danseur.
    </p>
    <p>
      {{
        store.medicalCertificate === MedicalCertificate.Mail
          ? "Ces fichiers sont"
          : "Ce fichier est"
      }}
      à envoyer par mail, avec signature, à l'adresse suivante :
    </p>

    <div class="p-8 font-bold bg-stone-200/80 rounded-xl">
      <a href="mailto:ecole@danse-etincelle.fr" class="underline">
        ecole@danse-etincelle.fr
      </a>
    </div>

    <p>
      <strong>Dernière étape</strong>, valider l'adhésion nécessaire pour
      l'assurance des élèves et la validation de leur place sur le site
      d'HelloAsso d'Ecole de danse Etincelle (1 adhésion par élève inscrit).
    </p>

    <div class="p-8 font-bold bg-stone-200/80 rounded-xl">
      <a
        href="https://www.helloasso.com/associations/ecole-de-danse-etincelle/adhesions/adhesion-ecole-de-danse-etincelle-2025-2026"
        class="underline"
        target="_blank"
      >
        Régler l'adhésion directement sur HelloAsso
      </a>
    </div>

    <button
      type="button"
      class="flex items-center gap-2 p-4 text-xl font-semibold tracking-wider transition-shadow bg-orange-400 rounded-lg hover:shadow-md text-slate-100 hover:bg-orange-500"
      @click="exportToPDF"
    >
      <Download /> Télécharger le bulletin de&nbsp;pré-inscription
    </button>
    <p>
      <strong>Important :</strong> nous ne conservons aucune donnée lors de
      l'utilisation de ce site internet. Si vous quittez cette page sans
      télécharger le bulletin de pré-inscription, il faudra compléter à nouveau
      la procédure d'inscription.
    </p>

    <div class="p-2 border" :class="isProd ? 'hidden' : ''">
      <!-- START OF INVOICE -->
      <div id="invoice" class="relative p-2 overflow-hidden text-sm">
        <!-- Top right decoration -->
        <div
          class="absolute rotate-[11deg] bg-yellow-200/50 -top-[720px] -right-[160px] w-[800px] h-[800px]"
        />
        <div class="relative z-20 flex gap-2 text-7xl">
          <img
            :src="logoTitle"
            alt="Ecole de Danse Etincelle"
            class="w-[400px] ml-6"
          />
        </div>

        <!-- Informations -->
        <div class="flex items-center gap-2">
          <p class="text-xl text-orange-900 uppercase">
            Bulletin d'inscription web
          </p>
        </div>

        <div class="pl-4">
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
          <div class="pl-4">
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
                :class="
                  !store.checkedClasses.includes(classItem.id) && 'opacity-30'
                "
              >
                <td class="w-8">
                  <display-check
                    :evaluate="store.checkedClasses.includes(classItem.id)"
                  />
                </td>
                <td>{{ classItem.label }}</td>
                <td>
                  {{
                    classItem.id === Classes.Avances ? "---" : classItem.details
                  }}
                </td>
                <td>{{ classItem.day }}</td>
                <td>{{ classItem.hours }}</td>
                <td>{{ classItem.room }}</td>
                <td>{{ classItem.price }} €</td>
              </tr>
            </table>
          </div>

          <!-- Lyrical & Modern Jazz -->
          <div class="pl-4">
            <p class="mb-1 italic font-bold">
              Lyrical Jazz et Modern'Jazz avec Marine Buron :
            </p>
            <table class="w-full text-xs table-fixed">
              <tr
                v-for="classItem in store.classesItems
                  .filter((ci) =>
                    [Classes.Concours13, Classes.AtelierChore].includes(ci.id)
                  )
                  .sort((a, b) => a.day.localeCompare(b.day))"
                :key="classItem.id"
                class="text-stone-600"
                :class="
                  !store.checkedClasses.includes(classItem.id) && 'opacity-30'
                "
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
        <div class="grid grid-cols-2 pl-4">
          <div>
            <div class="text-slate-600">
              <span class="text-stone-900">Nombre de cours :</span>
              <span class="pl-2 uppercase">{{
                store.checkedClasses.length
              }}</span>
            </div>
            <div class="text-slate-600">
              <span class="text-stone-900">Total des cours pour l'année :</span>
              <span class="pl-2 uppercase">{{ store.totalOfClasses }} €</span>
            </div>
            <div class="text-slate-600">
              <span class="text-stone-900"
                >Adhésion
                {{ store.locationDiscount > 0 ? "tarif réduit" : "" }}
                {{ store.membership - store.locationDiscount }}€ par élève
                (réglé séparément) :</span
              >
              <span class="pl-2 uppercase">1</span>
            </div>
            <div class="text-slate-600">
              <span class="text-stone-900"
                >Budget Costumes par cours, {{ store.costumeBudget }}€ x
                <span class="pl-2 uppercase text-slate-600"
                  >{{ store.checkedClasses.length }}
                </span>
                =
                <span class="pl-2 uppercase text-slate-600"
                  >{{ store.costumeTotal }} €</span
                >
              </span>
            </div>
          </div>
          <div>
            <!-- <div class="flex items-center gap-2">
              <display-check :evaluate="!!store.locationDiscount" />
              <span class="">-10€ pour les habitants de Marne et Gondoire</span>
            </div> -->
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
        <div class="pl-4 mt-1">
          <!-- One time -->
          <div
            class="grid grid-cols-2 px-2 text-sm"
            :class="
              store.paymentType === PaymentType.One
                ? 'opacity-100'
                : 'opacity-30'
            "
          >
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
              <div>Le 15/09/{{ currentYear }}</div>
            </div>
          </div>

          <!-- Three times -->
          <div
            class="grid items-start grid-cols-2 px-2"
            :class="
              store.paymentType === PaymentType.Three
                ? 'opacity-100'
                : 'opacity-30'
            "
          >
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
                  (1/3 total)
                </div>
                <div>Le 15/09/{{ currentYear }}</div>
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
                <div>Le 01/11/{{ currentYear }}</div>
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
                <div>Le 01/02/{{ currentYear + 1 }}</div>
              </div>
            </div>
          </div>

          <!-- Other -->
          <div
            class="grid items-start grid-cols-2 px-2"
            :class="
              store.paymentType === PaymentType.Other
                ? 'opacity-100'
                : 'opacity-30'
            "
          >
            <div class="flex gap-2">
              <display-check
                :evaluate="store.paymentType === PaymentType.Other"
              />
              Paiement différent : nous contacter (+ 10€)
            </div>
          </div>

          <!-- Year total -->
          <div class="mt-2 font-bold text-center">
            <div>
              Total de l'année (hors adhésion) :
              {{ store.total }} €
            </div>
            <div class="font-normal text-xs">
              Cours + adhésion à régler via Hello Asso =
              {{ store.total + store.membership - store.locationDiscount }} €
            </div>
            <div class="text-xs font-normal">
              NB : pour les classes concours, le prix des inscriptions aux
              concours n’est pas inclus dans le total de l'année.
            </div>
          </div>
        </div>

        <!-- Medical -->
        <!-- <div class="flex items-center gap-4 pl-4 m-auto mt-2 text-sm">
          <div class="flex items-start flex-1 gap-2">
            <display-check :evaluate="false" /> Le certificat médical de non
            contre-indication à la pratique de la danse a été transmis avec ce
            dossier
          </div>
          <div>ou</div>
          <div class="flex items-start flex-1 gap-2">
            <display-check :evaluate="false" /> Le certificat médical de non
            contre-indication à la pratique de la danse sera remis en main
            propre avant le 01/10/{{ currentYear }}
          </div>
        </div> -->

        <div class="mt-2">
          <div class="flex flex-row items-center gap-2">
            <display-check :evaluate="true" /> J'accepte le règlement intérieur
            d'Etincelle.
          </div>
          <div class="flex flex-row gap-2 items-top">
            <div class="pt-1">
              <display-check :evaluate="true" />
            </div>
            J'autorise Ecole de Danse Etincelle et son professeur à utiliser
            l’image de votre enfant (ou la votre pour les élèves majeurs) dans
            le but de faire connaître l’association.
          </div>
          <div class="flex flex-row gap-2 items-top">
            <div class="pt-1">
              <display-check :evaluate="true" />
            </div>
            {{
              store.medicalCertificate === MedicalCertificate.Mail
                ? "Je remets le certificat médical de non contre-indication à la pratique de la danse à l'association par mail à l'adresse ecole@danse-etincelle.fr"
                : "Je remettrai le certificat médical de non contre-indication à la pratique de la danse à l'association avant le 01/10/" +
                  currentYear
            }}
          </div>
        </div>
        <!-- <p
          class="text-sm italic text-center text-orange-500 underline underline-offset-2"
        >
          Les cours reprennent à partir du 15 septembre {{ currentYear }}
        </p> -->

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
              {{ new Date().toLocaleDateString() }}
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
          class="py-0.5 mt-4 text-[10px] leading-[14px] font-semibold text-center bg-orange-500 text-stone-50"
        >
          <p>Ecole de danse Etincelle, Association Loi 1901 n°W932007295</p>
          <p>n°siret : 84066826300014 - APE : 8552Z</p>
          <p>Contact : marine@danse-etincelle.fr</p>
          <p>
            Etincelle, Mairie de Bussy-saint-Georges, 1 place de la mairie -
            77600 Bussy-saint-Georges
          </p>
        </div>

        <div class="p-8 mt-4 space-y-4">
          <rules-block />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TitleForm, RulesBlock } from "@/components/ui";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
const currentYear = new Date().getFullYear();
</script>

<template>
  <title-form>Règlement intérieur</title-form>
  <div class="px-8 py-12 text-2xl bg-orange-400 rounded-xl text-slate-50">
    Merci de lire attentivement notre règlement intérieur.
  </div>

  <div class="mt-8 space-y-12">
    <rules-block />
    <FormKit
      type="radio"
      name="medical_certificate"
      :options="[
        {
          label:
            'Le certificat médical de non contre-indication à la pratique de la danse sera transmis par mail avec ce dossier',
          value: 'mail',
        },
        {
          label: `Le certificat médical de non contre-indication à la pratique de la danse sera remis en main propre avant le 01/10/${currentYear}`,
          value: 'handoff',
        },
      ]"
      v-model="store.medicalCertificate"
    />
    <FormKit
      type="checkbox"
      label="Via ce règlement, vous autorisez l’Ecole de Danse Etincelle et son
          professeur à utiliser l’image de votre enfant (ou la votre pour les
          élèves majeurs) dans le but de faire connaître l’association."
      v-model="store.arePicturesRightsChecked"
    />
    <FormKit
      type="checkbox"
      label="J'accepte le règlement intérieur d'Etincelle."
      help="En cochant cette case, l'élève et son représentant légal acceptent l'ensemble du règlement présenté ci-dessus et s'engagent à le respecter sans réserve pour toute l'année d'inscription."
      v-model="store.areRulesChecked"
    />
  </div>
</template>

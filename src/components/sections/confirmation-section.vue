<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { useAppStore } from "@/stores/AppStore";
import { FormStep, PaymentType } from "@/definitions/app.d";

import { MapPin, Phone, Calendar, User, Edit } from "lucide-vue-next";

const store = useAppStore();
const currentYear = new Date().getFullYear();
const handleEditInformations = () =>
  store.handleFormStep({ jumpTo: FormStep.Informations });
</script>

<template>
  <title-form>Récapitulatif</title-form>
  <div class="grid gap-8 xl:grid-cols-2">
    <div
      class="px-12 py-8 bg-orange-500 bg-opacity-20 rounded-xl drop-shadow-2xl"
    >
      <div class="mb-8">
        <div class="text-sm font-normal text-stone-500">Nom de l'élève</div>
        <div class="text-5xl font-bold">
          {{ store.formValues.name }} {{ store.formValues.surname }}
        </div>
      </div>
      <div class="mb-8 space-y-2">
        <!-- Date de naissance -->
        <div>
          <div
            class="flex items-center gap-1 text-sm font-normal text-stone-500"
          >
            <Calendar :size="14" /> Date de naissance
          </div>
          <div class="text-2xl font-regular">
            {{ new Date(store.formValues.birthday).toLocaleDateString() }}
          </div>
        </div>
        <!-- Téléphone -->
        <div>
          <div
            class="flex items-center gap-1 text-sm font-normal text-stone-500"
          >
            <Phone :size="14" /> Téléphone
          </div>
          <!-- Add a dot every two characters -->
          <div class="text-2xl font-regular">
            {{ store.formValues.phone }}
          </div>
        </div>
        <!-- Adresse -->
        <div>
          <div
            class="flex items-center gap-1 text-sm font-normal text-stone-500"
          >
            <MapPin :size="14" /> Adresse
          </div>
          <div class="text-2xl font-regular">
            {{ store.formValues.address }}, {{ store.formValues.zipcode }},
            {{ store.formValues.city }}
          </div>
        </div>
        <!-- Responsable -->
        <div class="">
          <div
            class="flex items-center gap-1 text-sm font-normal text-stone-500"
          >
            <User :size="14" />Nom et email du responsable
          </div>
          <div class="text-2xl font-regular">
            {{ store.formValues.resp_name }}, <br />
            {{ store.formValues.resp_email }}
          </div>
        </div>
      </div>
      <div class="space-y-8">
        <!-- Cours choisis -->
        <div>
          <div
            class="flex items-center gap-1 text-sm font-normal text-stone-500"
          >
            <User :size="14" />Cours choisis
          </div>
          <div class="text-2xl font-regular">
            {{
              store.classesItems
                .filter((item) => store.checkedClasses.includes(item.id))
                .map((item) => `${item.label} (${item.day}, ${item.hours})`)
                .join(", ")
            }}
          </div>
        </div>
        <!-- Edit -->
        <button
          class="flex items-center gap-2 underline"
          v-on:click="handleEditInformations"
        >
          <Edit /> Modifier ces informations
        </button>
      </div>
      <!-- Règlement -->
    </div>
    <div
      class="px-12 py-8 bg-slate-400 bg-opacity-20 rounded-xl drop-shadow-2xl"
    >
      <h5 class="mb-2 text-2xl font-semibold">Type de règlement</h5>
      <FormKit
        type="radio"
        name="payment_type"
        :options="[
          { label: 'Règlement en une fois', value: PaymentType.One },
          {
            label: 'Règlement en trois fois',
            value: PaymentType.Three,
          },
          {
            label: 'Je souhaite régler différemment',
            value: PaymentType.Other,
          },
        ]"
        v-model="store.paymentType"
      />

      <h5 class="mb-2 text-2xl font-semibold">Déroulé du règlement</h5>
      <div>
        <div class="text-5xl font-bold font-regular">{{ store.total }} €</div>
      </div>
      <div v-if="store.paymentType === PaymentType.One">
        <p>en chèque, à régler en <strong>1</strong> fois :</p>
        <p class="pl-1 mt-2 text-lg">
          Totalité le <strong>15/10/{{ currentYear }}</strong
          >.
        </p>
      </div>

      <div v-if="store.paymentType === PaymentType.Other">
        <p>
          + de mensualités, ou règlement autre que par chèque : frais de dossier
          de 10€.
        </p>
      </div>

      <div v-if="store.paymentType === PaymentType.Three">
        <p>en chèque, à régler en <strong>3</strong> fois :</p>

        <ul class="pl-1 mt-2 text-lg list-inside">
          <li>
            <strong>{{ store.payments.first }} €</strong> (1/3 total) le
            <strong>15/09/{{ currentYear }}</strong>
          </li>
          <li>
            <strong>{{ store.payments.second }} €</strong> (1/3 total +
            costumes) le <strong>01/11/{{ currentYear }}</strong>
          </li>
          <li>
            <strong>{{ store.payments.third }} €</strong> (reste) le
            <strong> 01/02/{{ currentYear + 1 }} </strong>
          </li>
        </ul>
      </div>
      <div class="mt-4 text-xl">
        + <span class="font-bold">{{ store.membership }} € d'adhésion</span> à
        régler sur Hello Asso ce jour.
      </div>
    </div>
  </div>
</template>

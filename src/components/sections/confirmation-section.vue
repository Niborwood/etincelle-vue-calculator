<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { useAppStore } from "@/stores/AppStore";
import { PaymentType } from "@/definitions/app.d";

import { MapPin, Phone, Calendar, User } from "lucide-vue-next";

const store = useAppStore();
</script>

<template>
  <title-form>Récapitulatif</title-form>
  <div class="grid gap-8 xl:grid-cols-2">
    <div
      class="px-12 py-8 bg-orange-500 bg-opacity-20 backdrop-blur-2xl rounded-xl drop-shadow-2xl"
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
      <div class="space-y-2">
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
        <!-- Total de l'année -->
        <div>
          <div
            class="flex items-center gap-1 text-sm font-normal text-stone-500"
          >
            <User :size="14" />Total de l'année
          </div>
          <div class="text-5xl font-bold font-regular">{{ store.total }} €</div>
        </div>
      </div>
      <!-- Paiement -->
    </div>
    <div
      class="px-12 py-8 bg-slate-400 bg-opacity-20 backdrop-blur-2xl rounded-xl drop-shadow-2xl"
    >
      <h4 class="my-4 text-4xl font-bold">Paiement</h4>
      <FormKit
        type="radio"
        name="payment_type"
        label="Choix du paiement souhaité"
        :options="[
          { label: 'Paiement en une fois', value: PaymentType.One },
          { label: 'Paiement en trois fois', value: PaymentType.Three },
        ]"
        v-model="store.paymentType"
      />
    </div>
  </div>
</template>

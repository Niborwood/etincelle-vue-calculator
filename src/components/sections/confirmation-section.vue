<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { useAppStore } from "@/stores/AppStore";

import { MapPin, Phone, Calendar, User } from "lucide-vue-next";

const store = useAppStore();
</script>

<template>
  <title-form>Récapitulatif</title-form>
  <div
    class="bg-orange-500 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg px-12 py-8"
  >
    <div class="mb-8">
      <div class="text-stone-500 font-normal text-sm">Nom de l'élève</div>
      <div class="text-5xl font-bold">
        {{ store.formValues.name }} {{ store.formValues.surname }}
      </div>
    </div>

    <div class="space-y-2 mb-8">
      <!-- Date de naissance -->
      <div>
        <div class="text-stone-500 font-normal text-sm flex items-center gap-1">
          <Calendar :size="14" /> Date de naissance
        </div>
        <div class="text-lg font-regular">
          {{ new Date(store.formValues.birthday).toLocaleDateString() }}
        </div>
      </div>

      <!-- Téléphone -->
      <div>
        <div class="text-stone-500 font-normal text-sm flex items-center gap-1">
          <Phone :size="14" /> Téléphone
        </div>
        <!-- Add a dot every two characters -->
        <div class="text-lg font-regular">
          {{ store.formValues.phone }}
        </div>
      </div>

      <!-- Adresse -->
      <div>
        <div class="text-stone-500 font-normal text-sm flex items-center gap-1">
          <MapPin :size="14" /> Adresse
        </div>
        <div class="text-lg font-regular">
          {{ store.formValues.address }}, {{ store.formValues.zipcode }},
          {{ store.formValues.city }}
        </div>
      </div>

      <!-- Responsable -->
      <div class="">
        <div class="text-stone-500 font-normal text-sm flex items-center gap-1">
          <User :size="14" />Nom et email du responsable
        </div>
        <div class="text-lg font-regular">
          {{ store.formValues.resp_name }}, <br />
          {{ store.formValues.resp_email }}
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <div class="">
        <div class="text-stone-500 font-normal text-sm flex items-center gap-1">
          <User :size="14" />Cours choisis
        </div>
        <div class="text-lg font-regular">
          {{ store.formValues.resp_name }}
        </div>
      </div>

      <div class="">
        <div class="text-stone-500 font-normal text-sm flex items-center gap-1">
          <User :size="14" />Total de l'année
        </div>
        <div class="font-regular font-bold text-3xl">{{ store.total }} €</div>
      </div>
    </div>
  </div>
</template>

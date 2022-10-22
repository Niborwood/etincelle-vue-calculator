<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { FormKit } from "@formkit/vue";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
</script>

<template>
  <title-form>Informations</title-form>
  <FormKit
    id="informations"
    ref="myForm"
    type="form"
    @submit-invalid="store.handleInvalidInformationsSubmit"
    @submit="store.handleValidInformationsSubmit"
    :actions="false"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8">
      <FormKit
        type="text"
        name="name"
        label="Nom de l'élève"
        validation="required"
        v-model="store.formValues.name"
      />
      <FormKit
        type="text"
        name="surname"
        label="Prénom de l'élève"
        validation="required"
        v-model="store.formValues.surname"
      />
      <FormKit
        type="date"
        name="birthday"
        label="Date de naissance de l'élève"
        validation="required"
        v-model="store.formValues.birthday"
      />
      <FormKit
        type="text"
        name="resp_name"
        label="Nom et prénom du responsable légal"
        help="Dans le cas où l'élève est majeur, préciser le nom et prénom du contact d'urgence."
        validation="required"
        v-model="store.formValues.resp_name"
      />
      <FormKit
        type="tel"
        name="phone"
        label="Numéro de téléphone de l'élève"
        validation="required|matches:/^[0-9]{10}$/"
        :validation-messages="{
          matches:
            'Le numéro de téléphone doit être au format : xx-xx-xx-xx-xx',
        }"
        v-model="store.formValues.phone"
      />
      <FormKit
        type="email"
        name="resp_email"
        label="Mail du responsable légal"
        help="Dans le cas où l'élève est majeur, le mail peut être celui de l'élève."
        validation="required|email"
        v-model="store.formValues.resp_email"
      />
      <FormKit
        type="text"
        name="address"
        label="Adresse"
        validation="required"
        v-model="store.formValues.address"
      />
      <FormKit
        type="text"
        name="zipcode"
        label="Code Postal"
        validation="required|matches:/[0-9]{5}$/"
        inputmode="numeric"
        v-model="store.formValues.zipcode"
      />
      <FormKit
        type="text"
        name="city"
        label="Ville"
        validation="required"
        v-model="store.formValues.city"
      />
    </div>
  </FormKit>
</template>

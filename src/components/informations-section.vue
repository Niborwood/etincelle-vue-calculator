<script setup lang="ts">
import { TitleForm } from "./ui";
import { FormKit } from "@formkit/vue";
import { useAppStore } from "../stores/AppStore";

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
    v-model="store.formValues"
  >
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-8">
      <FormKit
        type="text"
        name="name"
        label="Nom de l'élève"
        validation="required"
      />
      <FormKit
        type="text"
        name="surname"
        label="Prénom de l'élève"
        validation="required"
      />
      <FormKit
        type="date"
        name="birthday"
        value="2011-01-01"
        label="Date de naissance de l'élève"
        validation="required"
      />
      <FormKit
        type="text"
        name=""
        label="Nom et prénom du responsable légal"
        help="Dans le cas où l'élève est majeur, préciser le nom et prénom du contact d'urgence."
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
      />
      <FormKit
        type="email"
        name="resp_email"
        label="Mail du responsable légal"
        help="Dans le cas où l'élève est majeur, le mail peut être celui de l'élève."
        validation="required|email"
      />
      <FormKit
        type="text"
        name="address"
        label="Adresse"
        validation="required"
      />
      <FormKit
        type="text"
        name="zipcode"
        label="Code Postal"
        validation="required|matches:/[0-9]{5}$/"
        inputmode="numeric"
      />
      <FormKit type="text" name="city" label="Ville" validation="required" />
    </div>
  </FormKit>
</template>

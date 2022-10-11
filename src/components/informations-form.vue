<script setup lang="ts">
import { TitleForm } from "./ui";
import { FormKit, submitForm } from "@formkit/vue";
import { reactive } from "vue";
import { getValidationMessages } from "@formkit/validation";
import type { FormKitNode } from "@formkit/core";
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();
const formValues = reactive({
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  resp_email: "",
  address: "",
  postal_code: "",
  city: "",
});

const handleInvalidSubmit = (node?: FormKitNode) => {
  if (!node) return;
  const validations = getValidationMessages(node);
};
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
    <div class="grid grid-cols-2 gap-x-8">
      <FormKit
        type="text"
        name="name"
        label="Nom de l'élève"
        validation="required"
        v-model="formValues.name"
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
      <FormKit type="text" name="" label="Nom et prénom du responsable légal" />
      <FormKit
        type="tel"
        name="phone"
        label="Numéro de téléphone de l'élève"
        validation="matches:/^[0-9]{10}$/"
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
      <FormKit type="text" name="city" label="Ville" validation="required" />
      <FormKit
        type="text"
        name="zip_code"
        label="Code Postal"
        validation="required|matches:/[0-9]{5}$/"
      />
    </div>
  </FormKit>
</template>

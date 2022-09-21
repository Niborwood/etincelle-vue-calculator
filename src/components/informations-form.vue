<script setup lang="ts">
import { TitleForm } from "./ui";
import { FormKit } from "@formkit/vue";
</script>

<template>
  <title-form>Informations</title-form>

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
    value="2011-01-01"
    label="Date de naissance de l'élève"
    help="Enter your birth day"
    validation="required|before:2010-01-01"
    validation-visibility="live"
  />
  <FormKit
    type="text"
    name=""
    label="Nom et prénom du responsable légal"
    validation=""
  />
  <FormKit
    type="tel"
    label="Numéro de téléphone"
    placeholder="xxx-xxx-xxxx"
    validation="matches:/^[0-9]{10}$/"
    :validation-messages="{
      matches: 'Le numéro de téléphone doit être au format : xxx-xxx-xxxx',
    }"
    help="Dans le cas où l'élève est majeur, le téléphone peut être celui de l'élève."
    validation-visibility="live"
  />
  <FormKit
    type="email"
    label="Mail du responsable légal"
    help="Dans le cas où l'élève est majeur, le mail peut être celui de l'élève."
    validation="required|email"
    validation-visibility="live"
    placeholder="vikas@school.edu"
  />
  <FormKit type="text" name="address" label="Adresse" validation="required" />
  <FormKit type="text" name="city" label="Ville" validation="required" />
  <FormKit
    type="text"
    name="zip_code"
    label="Code Postal"
    validation="required|matches:/[0-9]{5}$/"
  />
</template>

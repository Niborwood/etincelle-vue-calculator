<script setup lang="ts">
import { TitleForm } from "@/components/ui";
import { useAppStore } from "@/stores/AppStore";

const store = useAppStore();
</script>

<template>
  <title-form>Récapitulatif</title-form>
  <div v-for="info in store.formValues" :key="info">
    {{ info }}
  </div>
</template>

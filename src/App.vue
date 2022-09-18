<script setup lang="ts">
import InputGroup from "./components/InputGroup.vue";

const handleSubmit = () => {
  console.log("submit");
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 p-4 min-w-screen font-quicksand text-stone-700"
  >
    <header>
      <h1 class="text-5xl font-bold">Calculateur Etincelle</h1>
    </header>
    <main class="md:p-8 md:w-2/3">
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col items-start justify-start gap-4"
      >
        <InputGroup />
        <button type="submit">Suivant</button>
      </form>
    </main>
  </div>
</template>

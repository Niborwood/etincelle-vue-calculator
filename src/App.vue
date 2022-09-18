<script setup lang="ts">
import InputGroup from "./components/InputGroup.vue";

const handleSubmit = () => {
  console.log("submit");
};
</script>

<template class="bg-slate-900">
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 min-w-screen font-quicksand text-stone-700"
  >
    <header>
      <h1 class="text-5xl font-bold">Calculateur Etincelle</h1>
    </header>
    <main class="w-2/3 p-8">
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col items-start justify-start gap-4"
      >
        <InputGroup />
        <button type="submit">Envoyer</button>
      </form>
    </main>
  </div>
</template>

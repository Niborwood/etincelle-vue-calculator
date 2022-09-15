<script setup lang="ts">
const handleSubmit = () => {
  console.log("submit");
};
</script>

<template class="bg-slate-900">
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 min-w-screen bg-gradient-to-tr from-orange-300 to-pink-300 font-quicksand text-stone-700"
  >
    <header>
      <h1 class="text-5xl font-bold">Calculateur Etincelle</h1>
    </header>
    <main>
      <form @submit.prevent="handleSubmit">
        <button type="submit">Envoyer</button>
      </form>
    </main>
  </div>
</template>

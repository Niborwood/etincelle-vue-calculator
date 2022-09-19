<script setup lang="ts">
import { useAppStore } from "./stores/AppStore";
import ClassesForm from "./components/InputGroup.vue";
import SummaryForm from "./components/summary-form.vue";
import { FormStep } from "./definitions/app.d";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";

const store = useAppStore();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 p-4 min-w-screen font-quicksand text-stone-700 bg-gradient-to-tr from-stone-100/70 to-stone-100"
  >
    <header>
      <h1 class="text-5xl font-bold">Calculateur Etincelle</h1>
    </header>
    <main class="md:p-8 md:w-1/2">
      <form
        @submit.prevent="store.handleSubmit"
        class="flex flex-col items-start justify-start gap-8"
      >
        <!-- Initial -->

        <transition
          enter-active-class="duration-700 ease-out"
          :enter-from-class="
            store.slideDirection === 'next'
              ? 'transform opacity-0 translate-x-full'
              : 'transform opacity-0 -translate-x-full'
          "
          enter-to-class="translate-x-0 opacity-100"
          :leave-active-class="
            store.slideDirection === 'next'
              ? 'duration-700 ease-in -translate-x-full'
              : 'duration-700 ease-in translate-x-full'
          "
          leave-from-class="opacity-100"
          leave-to-class="transform opacity-0"
          mode="out-in"
        >
          <!-- Initial -->
          <div v-if="store.formStep === FormStep.Initial">
            <div class="text-xl leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              debitis, quidem explicabo quod pariatur consequatur ex porro
              sapiente qui nihil, autem dolorum nemo aut unde in sed
              consequuntur corporis aperiam iusto asperiores aliquam accusantium
              deleniti? Eaque minus quasi odit cumque consequuntur eligendi
              totam cupiditate, temporibus doloribus id? Voluptatibus corrupti
              explicabo tenetur animi vero debitis fugit totam, quis velit
              assumenda excepturi nemo repudiandae illum, quo illo, magnam
              molestiae placeat vel delectus sit culpa. Voluptatem iure
              nesciunt, dolores illo autem labore distinctio dicta, nostrum
              sapiente fuga at maiores eligendi a nisi earum?
            </div>
          </div>

          <!-- Classes -->
          <div v-else-if="store.formStep === FormStep.Classes">
            <classes-form />
          </div>

          <!-- Summary -->
          <div v-else-if="store.formStep === FormStep.Summary">
            <summary-form />
          </div>
        </transition>

        <!-- Control buttons -->
        <transition mode="out-in">
          <div
            v-if="!store.isAnimating || store.formStep === FormStep.Initial"
            class="flex flex-row justify-between w-full"
          >
            <button
              class="flex flex-row-reverse items-center gap-1 p-4 font-bold transition-shadow bg-orange-400 rounded-lg hover:shadow-md text-slate-100"
              @click="() => store.handleFormStep('prev')"
              v-if="store.formStep > 0"
            >
              Précédent <ArrowLeft size="14" />
            </button>
            <button
              class="flex flex-row items-center gap-1 p-4 font-bold transition-shadow bg-orange-400 rounded-lg hover:shadow-md text-slate-100"
              @click="() => store.handleFormStep('next')"
            >
              Suivant <ArrowRight size="14" />
            </button>
          </div>
        </transition>
      </form>
    </main>
  </div>
</template>

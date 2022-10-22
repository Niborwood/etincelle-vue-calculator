<script setup lang="ts">
import { useAppStore } from "@/stores/AppStore";
import {
  ClassesSection,
  SummarySection,
  InformationsSection,
  RulesSection,
  ConfirmationSection,
  InvoiceSection,
} from "@/components/sections";
import { FormStep } from "@/definitions/app.d";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { submitForm } from "@formkit/core";

const store = useAppStore();

const handleNextStep = () => {
  // Button for informations is submit form
  if (store.formStep === FormStep.Informations)
    return submitForm("informations");

  store.handleFormStep({ step: "next" });
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen gap-4 p-4 font-medium font-quicksand text-stone-700"
  >
    <header>
      <h1 class="m-auto font-bold text-7xl lg:w-2/3">
        École de Danse Étincelle
      </h1>
    </header>
    <main class="w-full mt-16 lg:w-2/3">
      <div class="flex flex-col items-start justify-start gap-8">
        <!-- Initial -->

        <transition
          enter-active-class="duration-700 ease-out"
          :enter-from-class="
            store.slideDirection === 'next'
              ? 'transform opacity-0'
              : 'transform opacity-0'
          "
          enter-to-class="translate-x-0 opacity-100"
          :leave-active-class="
            store.slideDirection === 'next'
              ? 'duration-700 ease-in'
              : 'duration-700 ease-in'
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

          <!-- Informations -->
          <div
            class="w-full"
            v-else-if="store.formStep === FormStep.Informations"
          >
            <informations-section />
          </div>

          <!-- Classes -->
          <div class="w-full" v-else-if="store.formStep === FormStep.Classes">
            <classes-section />
          </div>

          <!-- Summary -->
          <div class="w-full" v-else-if="store.formStep === FormStep.Summary">
            <summary-section />
          </div>

          <!-- Rules -->
          <div class="w-full" v-else-if="store.formStep === FormStep.Rules">
            <rules-section />
          </div>

          <!-- Confirmation -->
          <div
            class="w-full"
            v-else-if="store.formStep === FormStep.Confirmation"
          >
            <confirmation-section />
          </div>

          <!-- Invoice -->
          <div class="w-full" v-else-if="store.formStep === FormStep.Invoice">
            <invoice-section />
          </div>
        </transition>

        <!-- Control buttons -->
        <transition mode="out-in">
          <div
            v-if="!store.isAnimating || store.formStep === FormStep.Initial"
            class="flex flex-row justify-between w-full"
          >
            <button
              type="button"
              class="flex flex-row-reverse items-center gap-2 p-4 text-xl font-semibold tracking-wider transition-shadow bg-orange-400 rounded-lg hover:shadow-md text-slate-100 hover:bg-orange-500"
              @click="() => store.handleFormStep({ step: 'prev' })"
              v-if="
                store.formStep > FormStep.Initial &&
                store.formStep !== FormStep.Invoice
              "
            >
              Précédent <ArrowLeft :size="28" />
            </button>
            <button
              v-if="store.formStep < FormStep.Invoice"
              type="button"
              class="flex flex-row items-center gap-2 p-4 text-xl font-semibold tracking-wider transition-all bg-orange-400 rounded-lg hover:shadow-md text-slate-100 hover:bg-orange-500"
              :class="
                store.isNextButtonDisabled &&
                'bg-stone-300 hover:shadow-none hover:bg-stone-300 cursor-not-allowed'
              "
              :disabled="
                store.formStep === FormStep.Classes &&
                !store.checkedClasses.length
              "
              @click="handleNextStep"
            >
              Suivant <ArrowRight :size="28" />
            </button>
          </div>
        </transition>
      </div>
    </main>
  </div>
</template>

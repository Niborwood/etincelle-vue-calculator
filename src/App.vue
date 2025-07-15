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
      <h1 class="font-bold text-7xl lg:w-2/3">École de Danse Etincelle</h1>
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
            <div class="w-full space-y-4 text-xl leading-relaxed">
              <p>Bienvenue sur notre espace inscription !</p>
              <p>
                Vous allez compléter ici les informations nécessaires à votre
                dossier pour l'année de danse 2025-2026 d'Etincelle.
              </p>
              <p>
                Pour que votre pré-inscription soit valide, elle doit
                téléchargée et renvoyée par vos soins être renvoyée par mail et
                signée à
                <strong>ecole@danse-etincelle.fr</strong> accompagnée de notre
                règlement intérieur et du droit à l'image. Si vous avez déjà
                <u
                  >le certificat médical vous pouvez nous le joindre avec, sinon
                  il sera à nous remettre en main propre en septembre</u
                >.
              </p>
              <p>
                Tout document non signé ne sera pas pris en compte, et toute
                inscription doit être accompagnée du règlement de votre adhésion
                sur HelloAsso (adhésion uniquement, le reste du règlement de
                l'année se fera par chèque au forum des associations de
                Bussy-saint-Georges).
              </p>
              <p>
                Vous recevrez un mail de confirmation une fois tous les éléments
                validés par notre équipe.
              </p>
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

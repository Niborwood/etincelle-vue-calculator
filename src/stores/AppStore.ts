import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { FormStep } from "../definitions/app.d";

export const useAppStore = defineStore("app", () => {
  const classesItems = ref([
    {
      id: "enfants-1",
      label: "Enfants 1",
      details: "+ 4 ans",
      day: "Samedi",
      hours: "13h00 - 13h45",
      room: "Salle 4",
      price: 220,
    },
    {
      id: "enfants-2",
      label: "Enfants 2",
      details: "+ 8 ans",
      day: "Samedi",
      hours: "10h15 - 11h30",
      room: "Salle 4",
      price: 220,
    },
    {
      id: "concours-13",
      label: "Concours - de 13 ans",
      details: "+ 9 ans",
      day: "Samedi",
      hours: "11h00 - 13h00",
      room: "Salle 4",
      price: 250,
    },
    {
      id: "ados-1",
      label: "Ados 1",
      details: "+ 12 ans",
      day: "Vendredi",
      hours: "18h30 - 19h45",
      room: "Salle 5",
      price: 220,
    },
    {
      id: "avances",
      label: "Avancés",
      details: "Bon niveau technique exigé",
      day: "Mardi",
      hours: "20h00 - 21h30",
      room: "Salle 5",
      price: 250,
    },
    {
      id: "concours-13-18",
      label: "Concours 13 - 18 ans",
      details: "De 13 à 18 ans",
      day: "Vendredi",
      hours: "19h45 - 21h45",
      room: "Salle 5",
      price: 270,
    },
    {
      id: "atelier-chore",
      label: "Atelier chorégraphique",
      details: "Solo, duo, trio",
      hours: "13h45 - 15h15",
      day: "Samedi",
      room: "Salle 3",
      price: 250,
    },
  ]);
  const checkedClasses = ref<string[]>([]);

  // Form State
  const formStep = ref<FormStep>(FormStep.Initial);
  const slideDirection = ref<"prev" | "next">("next");
  const isAnimating = ref(false);

  const handleFormStep = (step: "next" | "prev") => {
    isAnimating.value = true;

    if (step === "next") {
      slideDirection.value = "next";
      formStep.value++;
    } else {
      slideDirection.value = "prev";
      formStep.value--;
    }

    isAnimating.value = false;
  };

  // Validation
  const handleSubmit = () => {
    console.log("submit");
  };

  return {
    classesItems,
    checkedClasses,
    formStep,
    slideDirection,
    handleFormStep,
    isAnimating,
    handleSubmit,
  };
});

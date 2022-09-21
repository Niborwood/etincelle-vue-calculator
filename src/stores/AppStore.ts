import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { FormStep, Classes } from "../definitions/app.d";

const COSTUME_BUDGET = 30;
const MEMBERSHIP = 35;
const MULTI_CLASS_DISCOUNT = 5;
const LOCATION_DISCOUNT = 10;

export const useAppStore = defineStore("app", () => {
  const classesItems = ref<
    {
      id: Classes;
      label: string;
      details: string;
      day: string;
      hours: string;
      room: string;
      price: number;
    }[]
  >([
    {
      id: Classes.Enfants1,
      label: "Enfants 1",
      details: "+ 4 ans",
      day: "Samedi",
      hours: "13h00 - 13h45",
      room: "Salle 4",
      price: 220,
    },
    {
      id: Classes.Enfants2,
      label: "Enfants 2",
      details: "+ 8 ans",
      day: "Samedi",
      hours: "10h15 - 11h30",
      room: "Salle 4",
      price: 220,
    },
    {
      id: Classes.Concours13,
      label: "Concours - de 13 ans",
      details: "+ 9 ans",
      day: "Samedi",
      hours: "11h00 - 13h00",
      room: "Salle 4",
      price: 250,
    },
    {
      id: Classes.Ados1,
      label: "Ados 1",
      details: "+ 12 ans",
      day: "Vendredi",
      hours: "18h30 - 19h45",
      room: "Salle 5",
      price: 220,
    },
    {
      id: Classes.Avances,
      label: "Avancés",
      details: "Bon niveau technique exigé",
      day: "Mardi",
      hours: "20h00 - 21h30",
      room: "Salle 5",
      price: 250,
    },
    {
      id: Classes.Concours1318,
      label: "Concours 13 - 18 ans",
      details: "De 13 à 18 ans",
      day: "Vendredi",
      hours: "19h45 - 21h45",
      room: "Salle 5",
      price: 270,
    },
    {
      id: Classes.AtelierChore,
      label: "Atelier chorégraphique",
      details: "Solo, duo, trio",
      hours: "13h45 - 15h15",
      day: "Samedi",
      room: "Salle 3",
      price: 250,
    },
  ]);
  const checkedClasses = ref<Classes[]>([]);

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

  // Computed

  const totalOfClasses = computed(() =>
    classesItems.value
      .filter((item) => checkedClasses.value.includes(item.id))
      .reduce((acc, item) => acc + item.price, 0)
  );
  const costumeTotal = computed(
    () =>
      checkedClasses.value.filter((item) => item !== Classes.AtelierChore)
        .length * COSTUME_BUDGET
  );
  const multiClassesDiscount = computed(() =>
    checkedClasses.value.length > 1
      ? totalOfClasses.value * MULTI_CLASS_DISCOUNT * 0.01
      : 0
  );
  const total = computed(
    () =>
      totalOfClasses.value +
      costumeTotal.value +
      MEMBERSHIP -
      multiClassesDiscount.value
  );

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
    totalOfClasses,
    costumeTotal,
    total,
    multiClassesDiscount,
  };
});

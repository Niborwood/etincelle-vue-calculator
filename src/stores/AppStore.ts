import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { FormStep, Classes, PaymentType } from "../definitions/app.d";
import type { FormValues } from "../definitions/app.d";
import { submitForm } from "@formkit/core";

const COSTUME_BUDGET = 30;
const MEMBERSHIP = 35;
const MULTI_CLASS_DISCOUNT = 5;
const LOCATION_DISCOUNT = 10;
const MARNE_ET_GONDOIRE_ZIPCODES = [
  77058, 77059, 77062, 77075, 77085, 77121, 77124, 77155, 77181, 77209, 77221,
  77234, 77237, 77243, 77248, 77307, 77372, 77374, 77438, 77464,
];

// STORE
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
  const checkedClasses = ref<Classes[]>([Classes.Ados1, Classes.Concours13]);

  // Form State
  const formStep = ref<FormStep>(
    import.meta.env.PROD ? FormStep.Initial : FormStep.Invoice
  );
  const slideDirection = ref<"prev" | "next">("next");
  const isAnimating = ref(false);
  const isInformationFormValid = ref(false);
  const formValues = ref<FormValues>({
    name: import.meta.env.PROD ? "" : "Robin",
    surname: import.meta.env.PROD ? "" : "Souriau",
    birthday: import.meta.env.PROD ? "" : "1993/01/06",
    resp_name: import.meta.env.PROD ? "" : "Marine Buron",
    phone: import.meta.env.PROD ? "" : "0620312364",
    resp_phone: import.meta.env.PROD ? "" : "0620312364",
    resp_email: import.meta.env.PROD ? "" : "robin.souriau@gmail.com",
    address: import.meta.env.PROD ? "" : "4 rue Louis Jouvet",
    zipcode: import.meta.env.PROD ? "" : "93160",
    city: import.meta.env.PROD ? "" : "Noisy le Grand",
  });
  const areRulesChecked = ref(false);

  const handleFormStep = ({
    step,
    jumpTo,
  }: {
    step?: "next" | "prev";
    jumpTo?: FormStep;
  }) => {
    // Check if any condition is disabling next action (see computed isNextButtonDisabled below)
    if (step === "next" && isNextButtonDisabled.value) return;

    // Else, update form step with animation trigger and direction (prev or next)
    isAnimating.value = true;

    if (jumpTo) {
      formStep.value = jumpTo;
    } else if (step === "next") {
      slideDirection.value = "next";
      formStep.value++;
    } else {
      slideDirection.value = "prev";
      formStep.value--;
    }

    isAnimating.value = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Computed
  const isNextButtonDisabled = computed(() => {
    // If we are on informations step/form, run formkit's submitForm to check if form is valid
    if (formStep.value === FormStep.Informations)
      return submitForm("informations");

    if (
      // If we are on the rules step, check if rules checkbox agreement is checked
      (formStep.value === FormStep.Rules && !areRulesChecked.value) ||
      // If we are on the classes step, check if at least one class is checked
      (formStep.value === FormStep.Classes && !checkedClasses.value.length) ||
      // If we are on the informations step, check if informations form is valid
      (formStep.value === FormStep.Informations &&
        !isInformationFormValid.value)
    )
      return true;
    return false;
  });

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
  const locationDiscount = computed(() =>
    MARNE_ET_GONDOIRE_ZIPCODES.includes(
      formValues.value.zipcode ? +formValues.value.zipcode : 0
    )
      ? LOCATION_DISCOUNT
      : 0
  );

  const total = computed(
    () =>
      totalOfClasses.value +
      costumeTotal.value +
      MEMBERSHIP -
      multiClassesDiscount.value -
      locationDiscount.value
  );

  // Validation
  const handleValidInformationsSubmit = () => {
    isInformationFormValid.value = true;
    handleFormStep({ step: "next" });
  };

  const handleInvalidInformationsSubmit = () => {
    isInformationFormValid.value = false;
  };

  // Confirmation
  const paymentType = ref<PaymentType>(PaymentType.One);
  const payments = computed(() => {
    const first = Math.round(total.value / 3 + MEMBERSHIP);
    const second = Math.round(total.value / 3 + costumeTotal.value);
    const third = total.value - first - second;

    return {
      first,
      second,
      third,
    };
  });

  return {
    classesItems,
    checkedClasses,
    formStep,
    slideDirection,
    handleFormStep,
    isAnimating,
    handleValidInformationsSubmit,
    handleInvalidInformationsSubmit,
    totalOfClasses,
    costumeTotal,
    total,
    multiClassesDiscount,
    isInformationFormValid,
    formValues,
    locationDiscount,
    areRulesChecked,
    isNextButtonDisabled,
    paymentType,
    payments,
  };
});

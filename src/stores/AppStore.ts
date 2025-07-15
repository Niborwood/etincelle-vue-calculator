import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {
  FormStep,
  Classes,
  PaymentType,
  MedicalCertificate,
} from "../definitions/app.d";
import type { FormValues } from "../definitions/app.d";
import { submitForm } from "@formkit/core";

const COSTUME_BUDGET = 30;
const MEMBERSHIP = 35;
const MULTI_CLASS_DISCOUNT = 5;
const LOCATION_DISCOUNT = 10;
const MARNE_ET_GONDOIRE_ZIPCODES = [
  77058, 77059, 77062, 77075, 77085, 77121, 77124, 77144, 77155, 77181, 77209,
  77221, 77234, 77237, 77243, 77248, 77307, 77372, 77374, 77438, 77464, 77600,
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
      hours: "11h30 - 12h15",
      room: "Salle 4",
      price: 230,
    },
    {
      id: Classes.Enfants2,
      label: "Enfants 2",
      details: "+ 8 ans",
      day: "Samedi",
      hours: "10h15 - 11h30",
      room: "Salle 4",
      price: 230,
    },
    {
      id: Classes.Concours13,
      label: "Concours 12-18ans",
      details: "2 cours / semaine obligatoires",
      day: "Samedi",
      hours: "13h45 - 15h15",
      room: "Salle 3",
      price: 265,
    },
    {
      id: Classes.Ados1,
      label: "Ados",
      details: "+ 12 ans",
      day: "Vendredi",
      hours: "18h30 - 19h45",
      room: "Salle 5",
      price: 235,
    },
    {
      id: Classes.CoursTechnique,
      label: "Cours Technique",
      details: "2 cours / semaine obligatoires",
      day: "Mardi",
      hours: "20h00 - 21h30",
      room: "Salle 5",
      price: 265,
    },
    {
      id: Classes.Avances,
      label: "Avancés",
      details: "Bon niveau technique exigé",
      day: "Vendredi",
      hours: "19h45 - 21h45",
      room: "Salle 5",
      price: 285,
    },
    {
      id: Classes.AtelierChore,
      label: "Atelier chorégraphique",
      details: "Solo, duo, trio. 2 cours / semaine obligatoires",
      hours: "12h15 - 13h45",
      day: "Samedi",
      room: "Salle 4",
      price: 265,
    },
  ]);
  const checkedClasses = ref<Classes[]>(
    import.meta.env.PROD ? [] : [Classes.Ados1, Classes.Concours13]
  );

  // Form State
  const formStep = ref<FormStep>(
    import.meta.env.PROD ? FormStep.Initial : FormStep.Classes
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
    resp_phone: import.meta.env.PROD ? "" : "0686454498",
    resp_email: import.meta.env.PROD ? "" : "robin.souriau@gmail.com",
    address: import.meta.env.PROD ? "" : "4 rue Louis Jouvet",
    zipcode: import.meta.env.PROD ? "" : "93160",
    city: import.meta.env.PROD ? "" : "Noisy le Grand",
  });
  const arePicturesRightsChecked = ref(false);
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
      // If we are on the rules step, check if rules and rights checkbox agreement is checked and medicalOption is selected
      (formStep.value === FormStep.Rules &&
        (!areRulesChecked.value || !arePicturesRightsChecked.value)) ||
      // If we are on the classes step, check if at least one class is checked
      (formStep.value === FormStep.Classes && !checkedClasses.value.length)
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
    () => checkedClasses.value.length * COSTUME_BUDGET
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
    () => totalOfClasses.value + costumeTotal.value - multiClassesDiscount.value
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
  const paymentType = ref<PaymentType>(PaymentType.Three);
  const payments = computed(() => {
    const first = Math.round(total.value / 3);
    const second = Math.round(total.value / 3 + costumeTotal.value);
    const third = total.value - first - second;

    return {
      first,
      second,
      third,
    };
  });

  // Rules
  const medicalCertificate = ref<MedicalCertificate>(MedicalCertificate.Mail);

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
    arePicturesRightsChecked,
    areRulesChecked,
    isNextButtonDisabled,
    paymentType,
    payments,
    medicalCertificate,
    membership: MEMBERSHIP,
    costumeBudget: COSTUME_BUDGET,
  };
});

enum FormStep {
  Initial,
  Informations,
  Classes,
  Summary,
  Rules,
  Confirmation,
  Invoice,
}

enum Classes {
  Enfants1 = "enfants-1",
  Enfants2 = "enfants-2",
  Concours13 = "concours-13",
  Ados1 = "ados-1",
  Avances = "avances",
  Concours1318 = "concours-13-18",
  AtelierChore = "atelier-chore",
}

type FormValues = {
  name: string;
  surname: string;
  birthday: string;
  resp_name: string;
  phone: string;
  resp_email: string;
  address: string;
  zipcode: string;
  city: string;
};

enum PaymentType {
  One = "one_time",
  Three = "three_time",
}

export { FormStep, Classes, FormValues, PaymentType };

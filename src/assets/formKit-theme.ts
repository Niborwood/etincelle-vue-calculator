// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
  label: "block mb-1 font-bold text-sm formkit-invalid:text-stone-900",
  inner: `
    max-w-md
    border
    border-stone-400
    formkit-invalid:border-red-500/30
    rounded-lg mb-1
    overflow-hidden
    focus-within:border-orange-500
  `,
  input:
    "w-full h-10 px-3 border-none text-base text-stone-700 placeholder-stone-400",
};
const boxClassification = {
  fieldset: "max-w-md border border-stone-400 rounded-md px-2 pb-1",
  legend: "font-bold text-sm",
  wrapper: "flex items-center cursor-pointer",
  help: "mb-1",
  input:
    "form-check-input appearance-none h-5 w-5 mr-2 border border-stone-500 rounded-sm bg-white checked:bg-orange-500 focus:outline-none focus:ring-0 transition duration-200",
  label: "text-sm text-stone-700 mt-1",
};
const buttonClassification = {
  wrapper: "mb-1",
  input:
    "bg-orange-500 hover:bg-orange-700 text-white text-sm font-normal py-3 px-5 rounded",
};

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export default {
  // the global key will apply to all inputs
  global: {
    outer: "mb-5 formkit-disabled:opacity-50",
    help: "text-xs text-stone-500",
    messages: "list-none p-0 mt-1 mb-0",
    message: "text-red-500 mb-1 text-xs",
  },
  button: buttonClassification,
  color: {
    label: "block mb-1 font-bold text-sm",
    input:
      "w-16 h-8 appearance-none cursor-pointer border border-stone-300 rounded-md mb-2 p-1",
  },
  date: textClassification,
  "datetime-local": textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    label: "block mb-1 font-bold text-sm",
    inner: "max-w-md cursor-pointer",
    input:
      "text-stone-600 text-sm mb-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-orange-500 file:text-white hover:file:bg-orange-600",
    noFiles: "block text-stone-800 text-sm mb-1",
    fileItem: "block flex text-stone-800 text-sm mb-1",
    fileRemove: "ml-auto text-orange-500 text-sm",
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    ...boxClassification,
    input: boxClassification.input.replace("rounded-sm", "rounded-full"),
  },
  range: {
    inner: "max-w-md",
    input:
      "form-range appearance-none w-full h-2 p-0 bg-stone-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none",
  },
  search: textClassification,
  select: textClassification,
  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    ...textClassification,
    input:
      "block w-full h-32 px-3 border-none text-base text-stone-700 placeholder-stone-400 focus:shadow-outline",
  },
  time: textClassification,
  url: textClassification,
  week: textClassification,
};

<script setup lang="ts">
import VueHtml2pdf from "html2pdf.js";

const exportToPDF = () => {
  const element = document.getElementById("invoice");
  const options = {
    margin: 0,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  VueHtml2pdf().from(element).set(options).save();
};
</script>

<template>
  <div class="space-y-8">
    <button @click="exportToPDF">Export to PDF</button>
    <div id="invoice" class="bg-stone-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      adipisci nisi maxime, harum dolore pariatur ullam. Doloribus sequi, ad
      deleniti incidunt maiores quaerat mollitia distinctio dolorem sapiente
      nulla culpa eum inventore enim nemo quibusdam repellendus! Nulla
      asperiores natus odio nam eum iste corporis fuga eos eius accusantium
      aperiam voluptates quas sint reprehenderit, porro fugiat, eaque, laborum
      excepturi! Facere molestiae ad expedita ex et tempore quos eaque aliquid.
      Quas molestiae illo provident laborum aliquid voluptas! Odio eius labore
      porro! Optio et ullam magni earum assumenda odio culpa dignissimos
      excepturi sunt, placeat ab reprehenderit ea rerum repellendus cum esse. At
      eos quia neque quod asperiores voluptates, deleniti porro cum odio eum
      architecto dicta unde amet tempore in sequi reiciendis similique,
      laboriosam sit et nihil deserunt nobis fugiat. Laboriosam, error.
      Temporibus.
    </div>
  </div>
</template>

<script setup lang="ts">
export interface SummaryCardProps {
  title: string;
  number: number;
  helperText?: string;
  helperBold?: boolean;
  secondNumber?: number;
  checked?: boolean;
  withEuros?: boolean;
  isDiscount?: boolean;
  isTotal?: boolean;
}

const props = defineProps<SummaryCardProps>();

console.log(props);
</script>

<template>
  <div :class="props.isTotal && 'sm:col-span-2'">
    <div
      class="flex flex-col justify-between p-8 text-xl border-4 rounded-xl"
      :class="{
        'bg-orange-300/60 border-orange-300 border-4': props.isTotal,
        'bg-emerald-700/30 border-emerald-700': props.isDiscount && number > 0,
      }"
    >
      <h3
        :class="{
          'text-emerald-900': props.isDiscount && number > 0,
          'text-stone-400': props.isDiscount && number <= 0,
        }"
      >
        {{ props.title }}
      </h3>
      <div
        class="text-5xl font-bold"
        :class="{
          'text-emerald-700': props.isDiscount && number > 0,
          'text-stone-400': props.isDiscount && number <= 0,
        }"
      >
        {{ props.number }}
        <span v-show="props.withEuros">€</span>
      </div>
    </div>
    <p
      class="px-4 mt-2 italic font-bold text-stone-600/80"
      :class="props.helperBold ? 'font-bold' : 'font-normal'"
    >
      {{ props.helperText }}
    </p>
  </div>
</template>

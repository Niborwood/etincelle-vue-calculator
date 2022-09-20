<script setup lang="ts">
export interface SummaryCardProps {
  title: string;
  number: number;
  helperText?: string;
  secondNumber?: number;
  checked?: boolean;
  withEuros?: boolean;
  isDiscount?: boolean;
}

const props = defineProps<SummaryCardProps>();
</script>

<template>
  <div
    class="flex flex-col justify-between p-8 border-2 rounded-xl"
    :class="
      props.isDiscount && number > 0 && 'bg-emerald-700/30 border-emerald-700'
    "
  >
    <h3 :class="props.isDiscount && number > 0 && 'text-emerald-900'">
      {{ props.title }}
    </h3>
    <div
      class="text-4xl font-bold"
      :class="props.isDiscount && number > 0 && 'text-emerald-700'"
    >
      {{ props.number }}
      <span v-show="props.withEuros">€</span>
    </div>
  </div>
</template>

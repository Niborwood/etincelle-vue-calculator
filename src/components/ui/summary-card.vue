<script setup lang="ts">
export interface SummaryCardProps {
  title: string;
  number: number;
  helperText?: string;
  secondNumber?: number;
  checked?: boolean;
  withEuros?: boolean;
}

const props = defineProps<SummaryCardProps>();
</script>

<template>
  <div class="flex flex-col justify-between flex-1 p-8 bg-stone-300 rounded-xl">
    <h3>{{ props.title }}</h3>
    <div class="text-4xl font-bold">
      {{ props.number }}
      <span v-show="props.withEuros">€</span>
    </div>
  </div>
</template>

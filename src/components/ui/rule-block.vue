<script setup lang="ts">
export interface RuleBlock {
  title: string;
}

const props = defineProps<RuleBlock>();
</script>

<template>
  <div>
    <h3 class="mb-2 text-2xl font-bold tracking-wider uppercase">
      {{ props.title }}
    </h3>
    <div class=""><slot /></div>
  </div>
</template>

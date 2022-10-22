<script setup lang="ts">
import { Square, CheckSquare } from "lucide-vue-next";

export interface DisplayCheckProps {
  evaluate: boolean;
}

const props = defineProps<DisplayCheckProps>();
</script>

<template>
  <div v-if="props.evaluate">
    <CheckSquare />
  </div>
  <div v-else>
    <Square />
  </div>
</template>

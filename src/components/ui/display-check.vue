<script setup lang="ts">
import { Square, CheckSquare } from "lucide-vue-next";

export interface DisplayCheckProps {
  evaluate: boolean;
  size?: number;
}

const props = defineProps<DisplayCheckProps>();
</script>

<template>
  <div v-if="props.evaluate">
    <CheckSquare :size="size ?? 14" />
  </div>
  <div v-else>
    <Square :size="size ?? 14" />
  </div>
</template>

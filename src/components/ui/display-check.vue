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
    <CheckSquare :size="size ?? 12" />
  </div>
  <div v-else>
    <Square :size="size ?? 12" />
  </div>
</template>

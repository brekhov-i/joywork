<template>
  <button :class="['btn', theme]"><slot /></button>
</template>

<script setup lang="ts">
export type theme = "green" | "grey-icon";
defineProps<{
  theme?: theme;
}>();
</script>

<style scoped lang="scss">
.btn {
  width: auto;
  height: auto;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;

  &.green {
    @apply bg-green;
    @apply text-white;
    padding: 6px 12px;
  }

  &.grey-icon {
    @apply bg-grey-200;
    @apply border;
    @apply border-grey-400;
    padding: 8px;
  }
}
</style>

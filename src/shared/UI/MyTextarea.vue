<template>
  <textarea
    @input="(e: Event) => emits('update:modelValue', (e.target as HTMLTextAreaElement).value)"
    class="textArea"
    :placeholder="placeholder"
    :value="modelValue"
  ></textarea>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<style scoped lang="scss">
.textArea {
  width: 100%;
  height: auto;
  min-height: 80px;
  border: 1px solid;
  @apply border-grey-400;
  border-radius: 6px;
  padding: 16px;
  font-size: 14px;

  &::placeholder {
    @apply text-grey-900;
  }
}
</style>

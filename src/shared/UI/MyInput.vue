<template>
  <div class="myInput" :class="withLabel ? 'myInput--withLabel' : ''">
    <label :for="nameField" class="myInput__label" v-if="withLabel">{{
      label
    }}</label>
    <div class="myInput__content">
      <input
        type="text"
        :name="nameField"
        class="myInput__field"
        @input="inputValue($event)"
        :placeholder="placeholder"
        :value="modelValue"
      />
      <div class="myInput__after" v-if="afterInput">{{ afterInput }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    nameField: string;
    label?: string;
    modelValue: string;
    placeholder: string;
    withLabel?: boolean;
    afterInput?: string;
  }>(),
  {
    withLabel: true,
  }
);

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const inputValue = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped lang="scss">
.myInput {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  &--withLabel {
    grid-template-columns: 1fr 468px;
    grid-column-gap: 30px;
  }

  &__label {
    @apply text-grey-900;
    font-size: 14px;
    line-height: 100%;
  }
  &__content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @apply text-grey-900;
  }
  &__after {
    margin-left: 16px;
  }
  &__field {
    width: 100%;
    border: 1px solid #dedede;
    border-radius: 6px;
    background: #fff;
    height: 37px;
    padding: 13px 16px;
    font-size: 14px;
    line-height: 100%;
    @apply text-black;

    &::placeholder {
      @apply text-grey-900;
    }
  }
}
</style>

<template>
  <div :class="['listItems', `listItems--${activeType}`]">
    <ComplexItem
      :class="[
        activeType === 'tile'
          ? 'medium'
          : activeType === 'table'
          ? 'small'
          : '',
      ]"
    />
    <ComplexItem
      :class="[
        activeType === 'tile'
          ? 'medium'
          : activeType === 'table'
          ? 'small'
          : '',
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { useComplexStore } from "@/app/store/complex";
import ComplexItem from "@/entities/complexItem.vue";
import { storeToRefs } from "pinia";

const { activeType } = storeToRefs(useComplexStore());
</script>

<style scoped lang="scss">
.listItems {
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @apply bg-grey-200;
  overflow-y: scroll;

  &.listItems--tile {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 28px;
    padding: 0 35px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
    &.listItems--tile {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

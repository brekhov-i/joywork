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
  width: calc(100% + 60px);
  transform: translateX(-30px);
  height: max-content;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  @apply bg-grey-200;
  overflow-y: scroll;
  overflow-x: hidden;

  &.listItems--tile {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 28px;
    padding: 0 35px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(1, 1fr);
    &.listItems--tile {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

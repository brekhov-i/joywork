<template>
  <div :class="['listItems', `listItems--${typeView}`]">
    <ComplexItem
      :class="[
        typeView === 'tile' ? 'medium' : typeView === 'table' ? 'small' : '',
      ]"
    />
    <ComplexItem
      :class="[
        typeView === 'tile' ? 'medium' : typeView === 'table' ? 'small' : '',
      ]"
    />
    <ComplexItem
      :class="[
        typeView === 'tile' ? 'medium' : typeView === 'table' ? 'small' : '',
      ]"
    />
    <ComplexItem
      :class="[
        typeView === 'tile' ? 'medium' : typeView === 'table' ? 'small' : '',
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { useComplexStore } from "@/app/store/complex";
import ComplexItem from "@/entities/complexItem.vue";
import { storeToRefs } from "pinia";

const objectStore = useComplexStore();
const { typeView } = storeToRefs(objectStore);
</script>

<style scoped lang="scss">
.listItems {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @apply bg-grey-200;
  row-gap: 30px;

  &.listItems--tile {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 28px;
    padding: 0 35px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 1600px) {
    &.listItems--tile {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>

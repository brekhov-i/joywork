<template>
  <div class="typeGrid">
    <button
      v-for="(type, index) in arrTypes"
      :key="index"
      :class="['typeGrid__btn', typeView === index ? 'active' : '']"
      @click="changeTypeView(index)"
    >
      <img
        :src="require(`@/shared/assets/icons/typeNav/${index}.svg`)"
        :alt="type"
      />
      <div class="text">{{ type }}</div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useComplexStore } from "@/app/store/complex";

const objectStore = useComplexStore();
const { changeTypeView } = useComplexStore();
const { typeView, arrTypes } = storeToRefs(objectStore);
</script>

<style scoped lang="scss">
.typeGrid {
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 24px;

  &__btn {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &.active {
      .text {
        @apply text-green;
        @apply font-semibold;
        &::before {
          height: 0;
        }
      }
    }
    .text {
      position: relative;
      @apply text-grey-900;

      &::before {
        width: 100%;
        height: 1px;
        @apply bg-grey-900;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
      }
    }

    img {
      width: 37px;
      height: 37px;
      margin-right: 10px;
    }
  }
}
</style>

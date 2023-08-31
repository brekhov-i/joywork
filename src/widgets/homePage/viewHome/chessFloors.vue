<template>
  <div class="chessFloors">
    <div
      class="chessFloors__head col-span-2 flex flex-row justify-start items-center"
    >
      <div class="chessFloors__title text-2xl mr-12">План 22 этажа</div>
      <MyButton
        :theme="'green'"
        class="chessFloors__btn"
        @click="
          emits('update:activeFloor', activeFloor), emits('update:viewGrid')
        "
        >Показать этаж на фасаде
      </MyButton>
      <div class="chessFloors__resize"></div>
    </div>
    <div class="chessFloors__listFloor">
      <div
        v-for="index in 25"
        :key="`floor${index}`"
        class="floor flex flex-row py-2.5 px-3 gap-4 text-grey-900 rounded-md w-max"
        :class="
          activeFloor === index
            ? 'bg-green text-white cursor-default'
            : 'cursor-pointer'
        "
        @click="activeFloor = index"
      >
        <div
          class="after text-white"
          :class="activeFloor !== index ? 'hidden' : ''"
        >
          План
        </div>
        {{ index + 1 }}
        <div
          class="before text-white"
          :class="activeFloor !== index ? 'hidden' : ''"
        >
          этажа
        </div>
      </div>
    </div>
    <div class="chessFloors__mapFloor overflow-x-scroll relative">
      <img
        :src="require('@/shared/assets/images/floors/floor25.png')"
        alt=""
        usemap="#floormap"
        class="w-full"
      />
      <div class="points absolute w-full h-full top-0 left-0">
        <div class="point absolute bottom-[400px] left-[80px] z-10">
          <div class="point__countRoom">2к</div>
          <div class="point__number">№99</div>
          <div class="point__price">1 250 000 руб.</div>
          <div class="point__square">
            153,6 м2 <span>- 56 450 руб./м2</span>
          </div>
        </div>
        <div class="point absolute bottom-[540px] left-[180px]">
          <div class="point__countRoom">2к</div>
          <div class="point__number">№99</div>
          <div class="point__price">1 250 000 руб.</div>
          <div class="point__square">
            153,6 м2 <span>- 56 450 руб./м2</span>
          </div>
        </div>
        <div class="point absolute bottom-[430px] left-[180px]">
          <div class="point__countRoom">2к</div>
          <div class="point__number">№99</div>
          <div class="point__price">1 250 000 руб.</div>
          <div class="point__square">
            153,6 м2 <span>- 56 450 руб./м2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emits = defineEmits<{
  (e: "update:activeFloor", value: number): void;
  (e: "update:viewGrid"): void;
}>();
const activeFloor = ref<number>(22);
</script>

<style scoped lang="scss">
.chessFloors {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 50px 40px;

  &__listFloor {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    row-gap: 30px;
    padding-right: 30px;
    scrollbar-color: #9e9e9e #dedede;
    padding-bottom: 38px;
    &::-webkit-scrollbar {
      height: 100%;
      width: 3px;
      border-radius: 3px;
      background-color: #dedede;
    }
    &::-webkit-scrollbar-thumb {
      width: 100%;
      height: auto;
      border-radius: 3px;
      background-color: #9e9e9e;
    }
  }
}

.point {
  position: absolute;
  width: max-content;
  height: auto;
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 4px 20px;
  background-color: #ffffff;
  border: 1px solid;
  @apply border-green;
  padding: 10px;
  border-radius: 10px;
  &::after {
    content: "";
    position: absolute; /* Абсолютное позиционирование */
    left: 20px;
    bottom: -15px; /* Положение треугольника */
    border: 5px solid transparent; /* Прозрачные границы */
    border-top: 10px solid; /* Добавляем треугольник */
    @apply border-t-green;
  }

  &__countRoom {
    width: 24px;
    height: 24px;
    @apply bg-green;
    @apply text-white;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__number {
    grid-column: 1;
    @apply text-xs;
    align-self: center;
    @apply text-grey-900;
    opacity: 0;
    visibility: hidden;
    display: none;
  }
  &__price {
    grid-column: 2;
    grid-row: 1;
    font-weight: 700;
    opacity: 0;
    visibility: hidden;
    display: none;
  }
  &__square {
    grid-row: 1;
    grid-column: 2;
    @apply text-base;
    @apply text-black;
    span {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }

  &:hover {
    cursor: pointer;
    z-index: 11;
    .point__number {
      opacity: 1;
      visibility: visible;
      display: block;
    }
    .point__price {
      grid-column: 2;
      grid-row: 1;
      font-weight: 700;
      opacity: 1;
      visibility: visible;
      display: block;
    }
    .point__square {
      grid-row: 2;
      grid-column: 2;
      @apply text-xs;
      @apply text-grey-900;
      display: flex;
      span {
        opacity: 1;
        visibility: visible;
        display: block;
        margin-left: 2px;
      }
    }
  }
}
</style>

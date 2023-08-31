<template>
  <div
    class="viewHome relative flex flex-col h-max"
    :class="[filters.view?.value !== 'facades' ? 'px-7.5 py-5' : '']"
  >
    <div
      class="modelWindow absolute top-[-30px] right-[-30px] bg-white w-[750px] z-20 p-[50px] overflow-y-scroll"
      :class="[isOpenWindow ? 'open' : '']"
    >
      <div class="modelWindow__head flex flex-row items-center mb-8">
        <div class="modelWindow__title mr-auto text-3xl">Квартира №32</div>
        <button
          class="modelWindow__close"
          @click="isOpenWindow = !isOpenWindow"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8281 20L31.4141 11.4141C32.1953 10.6328 32.1953 9.36719 31.4141 8.58594C30.6328 7.80469 29.3672 7.80469 28.5859 8.58594L20 17.1719L11.4141 8.58594C10.6328 7.80469 9.36719 7.80469 8.58594 8.58594C7.80469 9.36719 7.80469 10.6328 8.58594 11.4141L17.1719 20L8.58594 28.5859C7.80469 29.3672 7.80469 30.6328 8.58594 31.4141C8.97656 31.8047 9.48828 32 10 32C10.5117 32 11.0234 31.8047 11.4141 31.4141L20 22.8281L28.5859 31.4141C28.9766 31.8047 29.4883 32 30 32C30.5117 32 31.0234 31.8047 31.4141 31.4141C32.1953 30.6328 32.1953 29.3672 31.4141 28.5859L22.8281 20Z"
              fill="#757575"
            />
          </svg>
        </button>
      </div>
      <div class="modelWindow__info flex flex-row items-center gap-x-[60px]">
        <div class="modelWindow__type">Студия</div>
        <div class="modelWindow__square">40,8 м2</div>
        <div class="modelWindow__type">10 этаж</div>
        <div
          class="modelWindow__status ml-auto mr-[-50px] bg-green text-white py-2.5 px-[50px] rounded-s-lg"
        >
          Свободно
        </div>
      </div>
      <div class="modelWindow__image w-full h-[548px]">
        <div
          class="image w-full h-full flex justify-center items-center px-[200px] py-[100px]"
        >
          <img
            :src="require('@/shared/assets/images/layoutsRoom/layout1.png')"
            alt=""
            class="w-full h-full min-w-[400px] object-container"
          />
        </div>
      </div>
      <div
        class="modelWindow__btns flex flex-col justify-center items-center mb-[50px]"
      >
        <RouterLink to="/" class="text-green font-bold mb-5"
          >Посмотреть на плане этажа</RouterLink
        >
        <MyButton :theme="'green'">Заявка на квартиру</MyButton>
      </div>
      <div class="modelWindow__price font-bold text-lg mb-2">
        10 580 000 руб.
      </div>
      <div class="modelWindow__priceSqure text-xs text-grey-900 mb-7">
        558 000 руб./м2
      </div>
      <div class="modelWindow__settings flex flex-col">
        <div class="setting__title mb-3 font-bold text-lg">Характеристики</div>
        <div class="settings__table flex flex-col">
          <div class="row grid grid-cols-[250px_1fr] border-b border-grey-400">
            <div class="cell border-grey-400 border-r flex items-center">
              Номер помещения
            </div>
            <div class="cell pl-7.5 py-2.5">32</div>
          </div>
          <div class="row grid grid-cols-[250px_1fr] border-b border-grey-400">
            <div class="cell border-grey-400 border-r flex items-center">
              Подъезд
            </div>
            <div class="cell pl-7.5 py-2.5">3</div>
          </div>
          <div class="row grid grid-cols-[250px_1fr] border-b border-grey-400">
            <div class="cell border-grey-400 border-r flex items-center">
              Этаж
            </div>
            <div class="cell pl-7.5 py-2.5">10</div>
          </div>
          <div class="row grid grid-cols-[250px_1fr] border-b border-grey-400">
            <div class="cell border-grey-400 border-r flex items-center">
              Название дома
            </div>
            <div class="cell pl-7.5 py-2.5">Демо Дом</div>
          </div>
          <div class="row grid grid-cols-[250px_1fr] border-b border-grey-400">
            <div class="cell border-grey-400 border-r flex items-center">
              Название ЖК
            </div>
            <div class="cell pl-7.5 py-2.5">Демо ЖК</div>
          </div>
          <div class="row grid grid-cols-[250px_1fr] border-b border-grey-400">
            <div class="cell border-grey-400 border-r flex items-center">
              Площадь, м2
            </div>
            <div class="cell pl-7.5 py-2.5">40,8</div>
          </div>
        </div>
      </div>
    </div>
    <ViewHead
      @update:isOpenFiltersMenu="isOpenFiltersMenu = $event"
      @update:filters="filters = $event"
    />
    <div class="viewHome__body h-full">
      <ChessTile
        :typeView="filters.view?.value"
        :hidden-price="filters.hiddenPrice"
        v-if="filters.view?.value === 'tile' || filters.view?.value === 'grid'"
      />
      <ChessLayouts v-if="filters.view?.value === 'layouts'" />
      <ChessFloors v-if="filters.view?.value === 'floors'" />
      <ChessList
        v-if="filters.view?.value === 'list'"
        @update:is-open-window="isOpenWindow = !isOpenWindow"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChessTile from "@/widgets/homePage/viewHome/chessTile.vue";
import ChessLayouts from "@/widgets/homePage/viewHome/chessLayouts.vue";
import ChessFloors from "@/widgets/homePage/viewHome/chessFloors.vue";
import ChessList from "@/widgets/homePage/viewHome/chessList.vue";
import ViewHead from "@/widgets/homePage/viewHome/viewHead.vue";
import { IFilters } from "@/widgets/homePage/viewHome/types";
import { ref } from "vue";

const isOpenFiltersMenu = ref<boolean>(false);
const isOpenWindow = ref<boolean>(false);
const filters = ref<IFilters>({
  rooms: [],
  price: {
    min: "",
    max: "",
  },
  square: {
    min: "",
    max: "",
  },
  hiddenPrice: false,
  onlyFree: false,
  view: {
    name: "Плитка",
    value: "tile",
    icon: "tile",
  },
});
</script>

<style scoped lang="scss">
.modelWindow {
  height: calc(100% + 80px);
  width: 0;
  overflow: hidden;
  overflow-y: scroll;
  visibility: hidden;
  transition: 0.5s all ease-in-out;

  &.open {
    visibility: visible;
    width: 750px;
    transition: 0.5s all ease-in-out;
  }
}
</style>

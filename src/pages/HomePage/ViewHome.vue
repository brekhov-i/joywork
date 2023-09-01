<template>
  <div
    class="viewHome flex flex-col h-full min-h-full"
    :class="[filters.view?.value !== 'facades' ? 'px-7.5 py-5' : '']"
  >
    <WindowInfoForList
      :isOpen="isOpenWindow"
      @update:is-open="isOpenWindow = !isOpenWindow"
    />
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
import WindowInfoForList from "@/widgets/homePage/viewHome/windowInfoForList.vue";
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

<style scoped lang="scss"></style>

<template>
  <div
    class="viewHome__head flex flex-col w-full z-10"
    :class="[
      filters.view?.value === 'facades'
        ? 'absolute px-[100px] pt-[23px] top-0'
        : 'relative bg-white mb-7.5',
    ]"
  >
    <div
      class="viewHome__title text-[32px]"
      v-if="filters.view?.value !== 'facades'"
    >
      Просмотр объекта
    </div>
    <div class="head__top flex flex-row w-full items-center mb-7.5">
      <button
        :class="[
          'viewHome__btnOpenFilters',
          'flex flex-row gap-x-2.5 border border-grey-400 w-max p-2 rounded z-20',
          isOpenFiltersMenu
            ? 'bg-green text-white fill-white'
            : 'text-black bg-gradient-to-t from-[#FEFEFE] to-[#F6F6F6] fill-green',
          filters.view?.value !== 'facades' ? 'hidden' : '',
        ]"
        @click="isOpenFiltersMenu = !isOpenFiltersMenu"
      >
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99967 3.625C9.42434 3.625 8.95801 4.09137 8.95801 4.66667C8.95801 5.24197 9.42434 5.70833 9.99967 5.70833C10.575 5.70833 11.0413 5.24197 11.0413 4.66667C11.0413 4.09137 10.575 3.625 9.99967 3.625ZM7.79427 4.04167C8.06632 3.07979 8.95067 2.375 9.99967 2.375C11.0487 2.375 11.933 3.07979 12.2051 4.04167H16.6663C17.0115 4.04167 17.2913 4.32149 17.2913 4.66667C17.2913 5.01184 17.0115 5.29167 16.6663 5.29167H12.2051C11.933 6.25354 11.0487 6.95833 9.99967 6.95833C8.95067 6.95833 8.06632 6.25354 7.79427 5.29167H3.33301C2.98783 5.29167 2.70801 5.01184 2.70801 4.66667C2.70801 4.32149 2.98783 4.04167 3.33301 4.04167H7.79427ZM14.9997 9.45833C14.4243 9.45833 13.958 9.92467 13.958 10.5C13.958 11.0753 14.4243 11.5417 14.9997 11.5417C15.575 11.5417 16.0413 11.0753 16.0413 10.5C16.0413 9.92467 15.575 9.45833 14.9997 9.45833ZM12.7943 9.875C13.0663 8.91308 13.9507 8.20833 14.9997 8.20833C16.2653 8.20833 17.2913 9.23433 17.2913 10.5C17.2913 11.7657 16.2653 12.7917 14.9997 12.7917C13.9507 12.7917 13.0663 12.0869 12.7943 11.125H3.33301C2.98783 11.125 2.70801 10.8452 2.70801 10.5C2.70801 10.1548 2.98783 9.875 3.33301 9.875H12.7943ZM4.99967 15.2917C4.42437 15.2917 3.95801 15.758 3.95801 16.3333C3.95801 16.9087 4.42437 17.375 4.99967 17.375C5.57497 17.375 6.04134 16.9087 6.04134 16.3333C6.04134 15.758 5.57497 15.2917 4.99967 15.2917ZM2.70801 16.3333C2.70801 15.0677 3.73402 14.0417 4.99967 14.0417C6.04866 14.0417 6.93302 14.7464 7.20507 15.7083H16.6663C17.0115 15.7083 17.2913 15.9882 17.2913 16.3333C17.2913 16.6785 17.0115 16.9583 16.6663 16.9583H7.20507C6.93302 17.9202 6.04866 18.625 4.99967 18.625C3.73402 18.625 2.70801 17.599 2.70801 16.3333Z"
          />
        </svg>

        Фильтры
      </button>
      <FilterWidget
        :filters="filters"
        :viewGrid="filters.view?.value"
        :isOpen="isOpenFiltersMenu"
        @update:filters="updateFilter($event)"
      />
      <div
        class="filters__view flex flex-col ml-auto z-20"
        :class="filters.view?.value !== 'facades' ? 'self-start' : ''"
      >
        <label
          class="mb-2"
          :class="[
            filters.view?.value === 'facades' && !isOpenFiltersMenu
              ? 'text-white'
              : 'text-grey-900',
          ]"
          >Вид</label
        >
        <Dropdown
          v-model="filters.view"
          :options="viewGrid"
          optionLabel="name"
          placeholder="Select a City"
          class="w-full md:w-14rem"
          :pt="{
            root: {
              class: [
                '!rounded !border !border-grey-400 !p-3 !w-[165px] !h-max',
              ],
            },
            input: {
              class: [
                '!flex !flex-row !items-center !p-0 !text-sm !leading-none !text-grey-900 !mr-3',
              ],
            },
            wrapper: {
              class: ['!p-0'],
            },
            item: {
              class: ['!text-sm'],
            },
          }"
        >
          <template #value="slotProps">
            <div class="icon mr-2 2xl:w-5 2xl:h-5 xl:w-4 xl:h-4">
              <img
                :src="
                  require(`@/shared/assets/icons/viewGrid/${slotProps.value.icon}.svg`)
                "
                alt=""
                class="h-full w-full"
              />
            </div>
            <div class="text">{{ slotProps.value.name }}</div>
          </template>
          <template #dropdownicon>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.76693 9.2418L10.0003 12.4752L13.2336 9.2418C13.5586 8.9168 14.0836 8.9168 14.4086 9.2418C14.7336 9.5668 14.7336 10.0918 14.4086 10.4168L10.5836 14.2418C10.2586 14.5668 9.73362 14.5668 9.40862 14.2418L5.58359 10.4168C5.25859 10.0918 5.25859 9.5668 5.58359 9.2418C5.90859 8.92513 6.44193 8.9168 6.76693 9.2418Z"
                fill="#666666"
              />
            </svg>
          </template>
          <template #option="slotProps">
            <div class="item flex flex-row items-center">
              <div class="item__icon mr-2 w-5 h-5">
                <img
                  :src="
                    require(`@/shared/assets/icons/viewGrid/${slotProps.option.icon}.svg`)
                  "
                  alt=""
                  class="w-full h-full"
                />
              </div>
              <div class="item__text">{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
    <div
      class="head__foundText"
      :class="
        filters.view?.value === 'facades' ? 'text-white font-700' : 'text-black'
      "
    >
      Найдено 500 помещений. Из них свободно:
      <span class="text-green">500</span>.
    </div>
    <div
      class="table__infoBlock w-full flex flex-row items-center bg-grey-100 py-2.5 2xl:px-[97px] xl:px-[50px] 2xl:gap-x-12.5 xl:gap-x-10 mt-7.5"
      :class="[filters.view?.value === 'facades' ? 'hidden' : '']"
    >
      <div class="infoItem flex flex-row items-center">
        <div class="infoItem__color bg-green w-4.5 h-4.5 rounded mr-2.5"></div>
        <div class="infoItem__text 2xl:text-base xl:text-sm text-grey-900">
          Свободные
        </div>
      </div>
      <div class="infoItem flex flex-row items-center">
        <div class="infoItem__color bg-orange w-4.5 h-4.5 rounded mr-2.5"></div>
        <div class="infoItem__text 2xl:text-base xl:text-sm text-grey-900">
          Забронированные
        </div>
      </div>
      <div class="infoItem flex flex-row items-center">
        <div
          class="infoItem__color bg-grey-900 w-4.5 h-4.5 rounded mr-2.5"
        ></div>
        <div class="infoItem__text 2xl:text-base xl:text-sm text-grey-900">
          Проданные
        </div>
      </div>
      <div class="infoItem flex flex-row items-center">
        <div
          class="infoItem__color bg-grey-400 w-4.5 h-4.5 rounded mr-2.5"
        ></div>
        <div class="infoItem__text 2xl:text-base xl:text-sm text-grey-900">
          Недоступные
        </div>
      </div>
      <div
        class="table__viewPrice ml-auto flex flex-row items-center gap-2"
        v-if="filters.view?.value === 'grid'"
      >
        <InputSwitch v-model="filters.hiddenPrice" />
        <label for="onlyFree" class="2xl:text-base xl:text-sm text-grey-900"
          >Скрыть стоимость</label
        >
      </div>
      <div class="table__onlyFree ml-auto flex flex-row items-center gap-2">
        <InputSwitch v-model="filters.onlyFree" />
        <label for="onlyFree" class="2xl:text-base xl:text-sm text-grey-900"
          >Только свободные</label
        >
      </div>
    </div>
    <div
      :class="[
        'head__btnsChangeSaid flex flex-row items-center gap-x-7.5 mt-5',
      ]"
      v-if="filters.view?.value === 'facades'"
    >
      <button
        :class="[
          viewFacadesSaid === 'park'
            ? 'bg-green text-white'
            : 'bg-white text-black',
          'px-4 py-2.5 rounded-3xl shadow-[2px_4px_4px_0px_rgba(0,_0,_0,_0.25)]',
        ]"
      >
        Вид со стороны парка
      </button>
      <button
        :class="[
          viewFacadesSaid === 'left'
            ? 'bg-green text-white'
            : 'bg-white text-black',
          'px-4 py-2.5 rounded-3xl shadow-[2px_4px_4px_0px_rgba(0,_0,_0,_0.25)]',
        ]"
      >
        Вид со стороны парка
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterWidget from "@/widgets/homePage/viewHome/filtersWidget.vue";
import { IFilters } from "@/widgets/homePage/viewHome/types";
import { ref, watch } from "vue";

const emits = defineEmits<{
  (e: "update:isOpenFiltersMenu", value: boolean): void;
  (e: "update:filters", value: IFilters): void;
}>();

const viewFacadesSaid = ref<string>("park");
const isOpenFiltersMenu = ref<boolean>(false);
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

const viewGrid = ref([
  {
    name: "Плитка",
    value: "tile",
    icon: "tile",
  },
  {
    name: "Сетка",
    value: "grid",
    icon: "grid",
  },
  {
    name: "Планировки",
    value: "layouts",
    icon: "layouts",
  },
  {
    name: "Этажи",
    value: "floors",
    icon: "floors",
  },
  {
    name: "Фасады",
    value: "facades",
    icon: "facades",
  },
  {
    name: "Список",
    value: "list",
    icon: "list",
  },
]);

const updateFilter = (event: IFilters) => {
  filters.value = { ...event, view: filters.value.view };
};

watch(isOpenFiltersMenu, (newV) => {
  emits("update:isOpenFiltersMenu", newV);
});
watch(
  filters,
  (newV) => {
    emits("update:filters", newV);
  },
  { deep: true }
);
</script>

<style scoped></style>

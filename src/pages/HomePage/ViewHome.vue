<template>
  <div class="viewHome">
    <div class="viewHome__title">Просмотр объекта</div>
    <div class="viewHome__table">
      <div class="table__head flex flex-col">
        <div class="table__filters flex flex-row items-center">
          <div
            class="filters__roms flex flex-col justify-start items-start h-full w-max"
          >
            <label class="text-grey-900 mb-2">Кол-во комнат</label>
            <div class="btns flex flex-row items-stretch grow h-full">
              <SelectButton
                v-model="filters.roms"
                :options="typeRooms"
                option-label="name"
                multiple
                aria-labelledby="multiple"
                :pt="{
                  button: {
                    class: ['2xl:!h-[37px] xl:!h-[37px]'],
                  },
                }"
              ></SelectButton>
            </div>
          </div>
          <div class="filters__price max-w-[300px] flex flex-col h-full">
            <label class="text-grey-900 mb-2">Стоимость, руб.</label>
            <div class="inputs grid grid-cols-2 gap-x-2 grow">
              <InputText
                type="text"
                v-model.number="filters.price.min"
                placeholder="от 500 000"
                :pt="{
                  root: {
                    class: [
                      'h-[calc(100%_-_4px)] mt-0.5 placeholder:text-sm placeholder:text-grey-900',
                      '2xl:h-[calc(100%_-_4px)] xl:!py-0 xl:h-[37px] xl:!mt-0',
                    ],
                  },
                }"
              />
              <InputText
                type="text"
                v-model.number="filters.price.max"
                placeholder="до 10 000 000"
                :pt="{
                  root: {
                    class: [
                      'mt-0.5 placeholder:text-sm placeholder:text-grey-900',
                      '2xl:h-[calc(100%_-_4px)] xl:!py-0 xl:h-[37px] xl:!mt-0',
                    ],
                  },
                }"
              />
            </div>
          </div>
          <div class="filters__square max-w-[160px] flex flex-col h-full">
            <label class="text-grey-900 mb-2">Площадь, м2</label>
            <div class="inputs grid grid-cols-2 gap-x-2 grow">
              <InputText
                type="text"
                v-model.number="filters.price.min"
                placeholder="от 10"
                :pt="{
                  root: {
                    class: [
                      'h-[calc(100%_-_4px)] mt-0.5 placeholder:text-sm placeholder:text-grey-900',
                      '2xl:h-[calc(100%_-_4px)] xl:!py-0 xl:h-[37px] xl:!mt-0',
                    ],
                  },
                }"
              />
              <InputText
                type="text"
                v-model.number="filters.price.max"
                placeholder="до 300"
                :pt="{
                  root: {
                    class: [
                      'mt-0.5 placeholder:text-sm placeholder:text-grey-900',
                      '2xl:h-[calc(100%_-_4px)] xl:!py-0 xl:h-[37px] xl:!mt-0',
                    ],
                  },
                }"
              />
            </div>
          </div>
          <div class="filters__view flex flex-col">
            <label class="text-grey-900 mb-2">Площадь, м2</label>
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
                <div class="icon mr-2 h-auto 2xl:w-5 xl:w-4">
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
                  <div class="item__icon mr-2">
                    <img
                      :src="
                        require(`@/shared/assets/icons/viewGrid/${slotProps.option.icon}.svg`)
                      "
                      alt=""
                    />
                  </div>
                  <div class="item__text">{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
        <div class="table__foundInfo">
          Найдено 500 помещений. Из них свободно: <span>500</span>.
        </div>
        <div class="table__infoBlock">
          <div class="infoItem">
            <div class="infoItem__color bg-green"></div>
            <div class="infoItem__text">Свободные</div>
          </div>
          <div class="infoItem">
            <div class="infoItem__color bg-orange"></div>
            <div class="infoItem__text">Забронированные</div>
          </div>
          <div class="infoItem">
            <div class="infoItem__color bg-grey-900"></div>
            <div class="infoItem__text">Проданные</div>
          </div>
          <div class="infoItem">
            <div class="infoItem__color bg-grey-400"></div>
            <div class="infoItem__text">Недоступные</div>
          </div>
          <div class="table__onlyFree">
            <InputSwitch v-model="filters.onlyFree" />
            <label for="onlyFree">Только свободные</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectButton from "primevue/selectbutton";
import { ref } from "vue";

const filters = ref({
  roms: [],
  price: {
    min: "",
    max: "",
  },
  onlyFree: false,
  view: {
    name: "Плитка",
    value: "tile",
    icon: "tile",
  },
});

const typeRooms = ref([
  {
    name: "Студия",
    value: "studio",
  },
  {
    name: "1",
    value: "oneroom",
  },
  {
    name: "2",
    value: "tworoom",
  },
  {
    name: "3",
    value: "threeroom",
  },
  {
    name: "4",
    value: "fourroom",
  },
  {
    name: "5 и более",
    value: "fiveroom",
  },
]);

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
</script>

<style scoped lang="scss">
.table__filters {
  column-gap: 80px;
}

@media screen and (max-width: 1600px) {
  .table__filters {
    column-gap: 40px;
  }
}
</style>

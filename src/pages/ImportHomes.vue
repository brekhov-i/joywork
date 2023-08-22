<template>
  <defaultLayout>
    <div class="importHome bg-white">
      <div class="importHome__title">Импорт помещений</div>
      <steps :active-item="activeItem" :items="stepItems" />
      <div class="tabContent w-full">
        <UploadStep v-if="activeItem === 0" />
        <FieldStep v-if="activeItem === 1" />
      </div>
    </div>
  </defaultLayout>
</template>

<script setup lang="ts">
import steps, { TStepItem } from "@/widgets/steps.vue";
import UploadStep from "@/widgets/importSteps/uploadStep.vue";
import FieldStep from "@/widgets/importSteps/fieldStep.vue";
import defaultLayout from "@/shared/layouts/defaultLayout.vue";
import { ref } from "vue";

const activeItem = ref<number>(1);
const stepItems = ref<TStepItem[]>([
  {
    id: 0,
    text: "Загрузка файла",
  },
  {
    id: 1,
    text: "Сопоставление полей",
  },
  {
    id: 2,
    text: "Объекты",
  },
  {
    id: 3,
    text: "Статусы и типы",
  },
  {
    id: 4,
    text: "Завершение",
  },
]);
</script>

<style scoped lang="scss">
.importHome {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;

  &__title {
    font-size: 32px;
    margin-bottom: 30px;
  }
}
</style>

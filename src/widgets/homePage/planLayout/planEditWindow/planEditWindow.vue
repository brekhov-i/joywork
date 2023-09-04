<template>
  <div class="planEditWindow" :class="isOpenPlanEditWindow ? 'open' : ''">
    <div class="planEditWindow__wrapper">
      <div class="planEditWindow__head">
        <div class="planEditWindow__title">
          Редактирование планировки помещения
        </div>
        <button
          class="planEditWindow__close"
          @click="emits('update:isOpenPlanEditWindow')"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8281 12L23.4141 3.41406C24.1953 2.63281 24.1953 1.36719 23.4141 0.585938C22.6328 -0.195312 21.3672 -0.195312 20.5859 0.585938L12 9.17188L3.41406 0.585938C2.63281 -0.195312 1.36719 -0.195312 0.585938 0.585938C-0.195312 1.36719 -0.195312 2.63281 0.585938 3.41406L9.17188 12L0.585938 20.5859C-0.195312 21.3672 -0.195312 22.6328 0.585938 23.4141C0.976562 23.8047 1.48828 24 2 24C2.51172 24 3.02344 23.8047 3.41406 23.4141L12 14.8281L20.5859 23.4141C20.9766 23.8047 21.4883 24 22 24C22.5117 24 23.0234 23.8047 23.4141 23.4141C24.1953 22.6328 24.1953 21.3672 23.4141 20.5859L14.8281 12Z"
              fill="#757575"
            />
          </svg>
        </button>
      </div>
      <div class="planEditWindow__content">
        <div class="planEditWindow__codePlan">
          <label for="codePlan" class="mb-2">Код планировки</label>
          <InputText id="codePlan" v-model="codePlan" class="w-full" />
        </div>
        <TabView class="w-full">
          <TabPanel header="Изображения">
            <PlanEditWindowImage />
          </TabPanel>
          <TabPanel header="3D-планировка">
            <PlanEditWindow3D />
          </TabPanel>
          <TabPanel header="Стороны света">
            <PlanEditWindowSideWorld />
          </TabPanel>
        </TabView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import { ref } from "vue";
import PlanEditWindowImage from "./planEditWindow-image.vue";
import PlanEditWindow3D from "./planEditWindow-3d.vue";
import PlanEditWindowSideWorld from "./planEditWindow-sideWorld.vue";

defineProps<{
  isOpenPlanEditWindow: boolean;
}>();
const emits = defineEmits<{
  (e: "update:isOpenPlanEditWindow"): void;
}>();
const codePlan = ref<string>("");
</script>

<style scoped lang="scss">
.planEditWindow {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding: 100px 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s all ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
    transition: 0.5s all ease-in-out;
  }

  &__wrapper {
    min-width: 900px;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #ffffff;
    padding: 50px;
  }

  &__head {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__close {
    width: 30px;
    height: 30px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__codePlan {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1600px) {
    &__wrapper {
      min-width: 700px;
      padding: 30px;
    }

    &__close {
      width: 20px;
      height: 20px;
    }
  }
}
</style>

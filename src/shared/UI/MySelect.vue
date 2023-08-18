<template>
  <div class="mySelect" ref="selectRef">
    <label class="mySelect__label">{{ label }}</label>
    <div class="mySelect__field">
      <div class="field__active" @click="showList = !showList">
        <template v-if="multiSelect">
          <div
            class="item"
            v-for="(item, index) in selectedArr"
            :key="item + index"
          >
            {{ item }}
          </div>
        </template>
        <template v-else>
          {{ selected }}
        </template>
        <div class="icon">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.375 7.875H0.625C0.279813 7.875 0 8.15481 0 8.5C0 8.84519 0.279813 9.125 0.625 9.125H15.375C15.7202 9.125 16 8.84519 16 8.5C16 8.15481 15.7202 7.875 15.375 7.875Z"
              fill="#9E9E9E"
            />
            <path
              d="M15.375 2.875H0.625C0.279813 2.875 0 3.15481 0 3.5C0 3.84519 0.279813 4.125 0.625 4.125H15.375C15.7202 4.125 16 3.84519 16 3.5C16 3.15481 15.7202 2.875 15.375 2.875Z"
              fill="#9E9E9E"
            />
            <path
              d="M15.375 12.875H0.625C0.279813 12.875 0 13.1548 0 13.5C0 13.8452 0.279813 14.125 0.625 14.125H15.375C15.7202 14.125 16 13.8452 16 13.5C16 13.1548 15.7202 12.875 15.375 12.875Z"
              fill="#9E9E9E"
            />
          </svg>
        </div>
      </div>
      <div
        :class="['field__list', showList ? 'active' : '']"
        v-if="multiSelect"
      >
        <div
          :class="['list__item', selectedArr.includes(value) ? 'active' : '']"
          @click="selectItem(value)"
        >
          {{ value }}
        </div>
      </div>
      <div :class="['field__list', showList ? 'active' : '']" v-else>
        <div
          :class="['list__item', selected === value ? 'active' : '']"
          @click="selectItem(value)"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    multiSelect?: boolean;
  }>(),
  {
    multiSelect: false,
  }
);

const value = ref<string>("Жилой комплекс в новостройке");
const selectRef = ref<EventTarget>();

const selected = ref<string>("");
const selectedArr = ref<string[]>([]);

const showList = ref<boolean>(false);

const selectItem = (value: string) => {
  props.multiSelect ? selectedArr.value.push(value) : (selected.value = value);
  showList.value = !showList.value;
};

document.addEventListener("click", (e: Event) => {
  if (
    e.target !== selectRef.value &&
    !e.composedPath().includes(selectRef.value as EventTarget)
  ) {
    showList.value = false;
  }
});
</script>

<style scoped lang="scss">
.mySelect {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 468px;
  grid-column-gap: 30px;
  align-items: center;

  &__label {
    @apply text-grey-900;
    font-size: 14px;
    line-height: 100%;
  }
  &__field {
    position: relative;
    width: 100%;
    border: 1px solid #dedede;
    border-radius: 6px;
    background: #fff;
    height: 37px;
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .field__active {
      width: 100%;
      height: 100%;
      font-size: 14px;
      line-height: 100%;
      @apply text-grey-900;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      cursor: pointer;
      .icon {
        width: 16px;
        height: 16px;
        margin-left: auto;
        display: flex;
        justify-content: center;
        align-self: start;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    .field__list {
      position: absolute;
      left: -1px;
      top: calc(100% - 4px);
      right: 0;
      width: calc(100% + 2px);
      height: auto;
      background-color: #ffffff;
      border-radius: 5px;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s all ease-in-out;
      z-index: 10;
      border: 1px solid;
      @apply border-grey-400;

      .list__item {
        width: 100%;
        height: auto;
        color: #757575;
        font-size: 14px;
        cursor: pointer;
        padding: 10px 15px;
        border-radius: 5px;
        transition: 0.3s background-color ease-in-out;

        &:hover {
          @apply bg-grey-400;
          transition: 0.3s background-color ease-in-out;
        }

        &.active {
          @apply bg-grey-200;
          transition: 0.3s background-color ease-in-out;
        }
      }

      &.active {
        opacity: 1;
        visibility: visible;
        transition: 0.3s all ease-in-out;
      }
    }
  }
}
</style>

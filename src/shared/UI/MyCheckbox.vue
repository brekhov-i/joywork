<template>
  <label class="checkbox">
    <input
      type="checkbox"
      @change="(e: Event) => emits('change', (e.target as HTMLInputElement).checked)"
    />
    <span class="checkbox-switch"></span>
    <div class="checkbox__text">{{ text }}</div>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
const emits = defineEmits<{
  (e: "change", value: boolean): void;
}>();
</script>

<style scoped lang="scss">
.checkbox {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  line-height: 28px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
}
.checkbox .checkbox-switch {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 50px;
  height: 31px;
  border: 1px solid;
  @apply border-grey-400;
  border-radius: 28%/50%;
  vertical-align: top;
  @apply bg-grey-200;
  transition: 0.2s;
  box-shadow: inset 0 0px 2px #dddddd;
  margin-right: 16px;
}
.checkbox .checkbox-switch:before {
  content: "";
  position: absolute;
  top: 3.5px;
  left: 4px;
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0px 6px #c7c7c7;
  transition: 0.15s;
}
.checkbox input[type="checkbox"] {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox input[type="checkbox"]:checked + .checkbox-switch {
  box-shadow: none;
  background: limegreen;
}
.checkbox input[type="checkbox"]:checked + .checkbox-switch:before {
  transform: translateX(18px);
  box-shadow: none;
}

/* Hover */
.checkbox input[type="checkbox"]:not(:disabled) + .checkbox-switch {
  cursor: pointer;
  border-color: transparent;
}

/* Disabled */
.checkbox input[type="checkbox"]:disabled + .checkbox-switch {
  filter: grayscale(70%);
  border-color: rgba(0, 0, 0, 0.1);
}
.checkbox input[type="checkbox"]:disabled + .checkbox-switch:before {
  background: #eee;
}

/* Focus */
.checkbox.focused .checkbox-switch:before {
  box-shadow: inset 0px 0px 4px #ff5623;
}
</style>

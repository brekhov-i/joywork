<template>
  <button class="btn"><slot /></button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.btn {
  width: auto;
  height: auto;
  padding: 6px 12px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
}
</style>

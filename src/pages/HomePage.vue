<template>
  <DefaultLayout>
    <div class="homePage relative bg-white flex justify-start items-start">
      <RouterView />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/shared/layouts/defaultLayout.vue";
</script>

<style lang="scss">
.homePage {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>

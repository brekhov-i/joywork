<template>
  <DefaultLayout>
    <div class="relative homePage bg-white h-max min-h-full">
      <RouterView />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/shared/layouts/defaultLayout.vue";
</script>

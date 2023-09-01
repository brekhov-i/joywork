<template>
  <DefaultLayout>
    <div class="homePage bg-white h-full">
      <RouterView />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/shared/layouts/defaultLayout.vue";
</script>

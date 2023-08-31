<template>
  <DefaultLayout>
    <div class="homePage bg-white h-max">
      <RouterView />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/shared/layouts/defaultLayout.vue";
</script>

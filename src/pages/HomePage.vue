<template>
  <Teleport to="body">
    <FormAddComplex
      :isOpen="formAddComplexOpen"
      @closeModel="formAddComplexOpen = !formAddComplexOpen"
    />
  </Teleport>
  <default-layout @changeOpen="formAddComplexOpen = !formAddComplexOpen">
    <div class="homePage">
      <ListItems />
    </div>
  </default-layout>
</template>

<script setup lang="ts">
import defaultLayout from "@/shared/layouts/defaultLayout.vue";
import ListItems from "@/widgets/ListItems.vue";
import FormAddComplex from "@/widgets/forms/formAddComplex.vue";
import { ref } from "vue";

const formAddComplexOpen = ref<boolean>(false);
</script>

<style scoped></style>

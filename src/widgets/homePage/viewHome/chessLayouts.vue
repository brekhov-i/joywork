<template>
  <div
    class="chessLayouts grid grid-cols-4 gap-[25px] xl:grid-cols-3 xl:gap-[20px]"
  >
    <ChessLayoutsItem />
    <ChessLayoutsItem />
    <ChessLayoutsItem />
    <ChessLayoutsItem />
    <ChessLayoutsItem />
    <ChessLayoutsItem />
  </div>
</template>

<script setup lang="ts">
import ChessLayoutsItem from "@/entities/viewHome/chessLayoutsItem.vue";
</script>

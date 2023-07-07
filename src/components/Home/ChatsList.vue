<template>
  <div class="w-3/12 h-full overflow-y-scroll flex flex-col border-t-4 border-black gap-5 p-6">
    <SearchBox />
    <ChatsItem />
    <ChatsItem />
    <ChatsItem />
    <ChatsItem />
  </div>
</template>
<script setup lang="ts">
import SearchBox from './SearchBox.vue'
import ChatsItem from './ChatsItem.vue'
</script>
<style lang="scss"></style>

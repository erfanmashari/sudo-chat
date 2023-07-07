<template>
  <main class="w-full h-full flex flex-row">
    <SidebarMenu />
    <ChatsList />
    <ChatMessages />
  </main>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/Home/SidebarMenu.vue'
import ChatsList from '@/components/Home/ChatsList.vue'
import ChatMessages from '@/components/Home/ChatMessages.vue'
</script>

<template>
  <div class="w-8/12 h-full flex flex-col border-t-4 border-black pt-6 px-6">
    <div
      class="messages h-full w-full relative flex flex-c justify-center items-end ol rounded-t-2xl overflow-hidden p-6"
    >
      <header
        class="w-full flex flex-row justify-between items-center absolute bg-black top-0 left-0 p-4"
      >
        <div class="flex flex-row items-center gap-3">
          <img src="@/assets/images/sudo.jpg" alt="profile image" class="w-8 h-8 rounded-full" />
          <h4 class="font-bold text-white">Sudo Developer</h4>
        </div>
        <div class="flex flex-row items-center gap-3">
          <span class="material-symbols-outlined text-3xl cursor-pointer"> call </span>
          <span class="material-symbols-outlined text-3xl cursor-pointer"> account_circle </span>
        </div>
      </header>

      <div class="w-full h-5/6 flex flex-col justify-end items-center overflow-y-scroll relative bottom-20 px-4 gap-4"> 
        <MessageItem :me="true" />
        <MessageItem :me="false" />
        <MessageItem :me="false" />
        <MessageItem :me="false" />
        <MessageItem :me="true" />
        <MessageItem :me="true" />
        <MessageItem :me="true" />
        <MessageItem :me="false" />
        <MessageItem :me="true" />
        <MessageItem :me="false" />
        <MessageItem :me="true" />
      </div>

      <SendMessage />
    </div>
  </div>
</template>
<script setup lang="ts">
import SendMessage from './SendMessage.vue'
import MessageItem from './MessageItem.vue'
</script>
<style scoped>
.messages {
  background-color: #1d1e24;
}
</style>

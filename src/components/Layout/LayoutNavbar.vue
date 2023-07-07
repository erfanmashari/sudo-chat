<template>
  <header class="navbar w-full flex flex-row justify-between items-center px-12 py-6">
    <nav class="text-primary flex flex-row items-center gap-6">
      <h1 class="text-2xl">
        <strong class="text-white">Sudo</strong>
        Chat
      </h1>
      <ul class="flex flex-row items-center gap-6">
        <RouterLink to="/" class="text-lg flex flex-row items-center cursor-pointer gap-3">
          <span class="material-symbols-outlined text-2xl relative top-0.5 text-primary-light">
            note
          </span>
          Resume
        </RouterLink>
        <RouterLink to="/" class="text-lg flex flex-row items-center cursor-pointer gap-3">
          <span class="material-symbols-outlined text-2xl relative top-0.5 text-primary-light">
            person_book
          </span>
          Contacts
        </RouterLink>
        <RouterLink to="/" class="text-lg flex flex-row items-center cursor-pointer gap-3">
          <span class="material-symbols-outlined text-2xl relative top-0.5 text-primary-light">
            monitoring
          </span>
          Statictic
        </RouterLink>
        <RouterLink to="/" class="text-lg flex flex-row items-center cursor-pointer gap-3">
          <span class="material-symbols-outlined text-2xl relative top-0.5 text-primary-light">
            chat
          </span>
          Chats
        </RouterLink>
        <RouterLink to="/" class="text-lg flex flex-row items-center cursor-pointer gap-3">
          <span class="material-symbols-outlined text-2xl relative top-0.5 text-primary-light">
            settings
          </span>
          Settings
        </RouterLink>
      </ul>
    </nav>
    <div class="flex flex-row items-center gap-8">
      <div class="flex flex-row items-center gap-4">
        <div class="flex justify-content-center">
          <InputSwitch
            v-model="darkMode"
            style="width: 50px; height: 25px; border: none; outline: none"
          />
        </div>
        <span class="pi pi-phone" style="font-size: 1.2rem"></span>
        <span class="pi pi-bell" style="font-size: 1.2rem"></span>
      </div>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col items-end">
          <h2 class="text-white font-bold text-lg">Sudo Developer</h2>
          <p>09151515155</p>
        </div>
        <img src="@/assets/images/sudo.jpg" alt="profile image" class="w-12 h-12 rounded-full" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// prime vue
import InputSwitch from 'primevue/inputswitch'

const darkMode = ref(true)
</script>

<style scoped>
.navbar {
  height: 10vh;
}
</style>
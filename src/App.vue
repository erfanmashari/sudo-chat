<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutNavbar from "@/components/Layout/LayoutNavbar.vue"
</script>

<template>
  <LayoutNavbar />

  <main class="main-container">
    <RouterView />
  </main>
</template>

<style scoped>
.main-container {
  height: 90vh;
}
</style>

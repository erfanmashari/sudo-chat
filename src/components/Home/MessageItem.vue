<template>
  <div class="w-full flex flex-row" :class="me ? 'justify-end' : 'justify-start'">
    <div
      class="relative px-6 py-3 rounded-b-xl"
      :class="me ? 'me-message rounded-tl-xl' : 'other-message rounded-tr-xl'"
    >
      Test Message
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    me: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.me-message {
    background-color: #B785F5;
}

.me-message::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid #B785F5;
    border-right: 10px solid #1d1e24;
    border-bottom: 10px solid #B785F5;
    position: absolute;
    top: -1px;
    right: -10px;
    transform: rotate(-45deg);
    outline: none;
  }

.other-message {
  background-color: #16171b;
}

.other-message::before {
  content: '';
  width: 0;
  height: 0;
  border-left: 10px solid #1d1e24;
  border-right: 10px solid #16171b;
  border-bottom: 10px solid #16171b;
  position: absolute;
  top: -1px;
  left: -10px;
  transform: rotate(45deg);
  outline: none;
}
</style>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li
    class="px-3 py-2 text-white hover:bg-sidebarDark group border-l-2 border-sidebar hover:border-sidebarNav"
  >
    <a href="#">
      <div class="flex items-center p-2">
        <slot name="icon"></slot>
        <span class="flex-1 ms-3 whitespace-nowrap">{{ label }}</span>
      </div>
    </a>
  </li>
</template>

<style scoped></style>

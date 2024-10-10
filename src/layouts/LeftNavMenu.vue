<script setup>
import LeftNavItem from "../components/ui/molecules/LeftNavItem.vue";
const isHovered = false
</script>

<template>
  <aside id="default-sidebar"
         class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
    <div class="space-y-2 bg-sidebarDark px-3 py-4">
      <h3 class="text-white p-2 text-sm">I M P E K A B L E</h3>
    </div>
    <div class="h-full overflow-y-auto bg-sidebar bg-opacity-100">
      <ul class="space-y-2 text-sm">
        <router-link to="/">
        <LeftNavItem label="Home">
          <template #icon>
            <svg
                class="icon flex-shrink-0 w-5 h-5 transition duration-75"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
              <path
                  :class="{ 'hovered': isHovered }"
                  d="M15.581,5.186l-7-5a1,1,0,0,0-1.162,0l-7,5A1,1,0,0,0,1.581,6.814L2,6.515V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V6.515A1.7,1.7,0,0,0,15,7a1,1,0,0,0,.582-1.814ZM12,14H10V11a2,2,0,0,0-4,0v3H4V5.086L8,2.229l4,2.857Z"
                  fill="currentColor"
              />
            </svg>
          </template>
        </LeftNavItem>
        </router-link>
        <LeftNavItem label="Dashboard">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="icon flex-shrink-0 w-5 h-5 transition duration-75">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
            </svg>

          </template>
        </LeftNavItem>
        <LeftNavItem label="Inbox">
          <template #icon>
            <svg
                class="icon flex-shrink-0 w-5 h-5 transition duration-75"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
              <path
                  :class="{ 'hovered': isHovered }"
                  d="M15,1H1A1,1,0,0,0,0,2V14a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V2A1,1,0,0,0,15,1ZM14,13H2V6.723L7.5,9.868a1,1,0,0,0,.992,0L14,6.723Zm0-8.58L8,7.849,2,4.42V3H14Z"
                  fill="currentColor"
              />
            </svg>
          </template>
        </LeftNavItem>
        <LeftNavItem label="Products">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="icon flex-shrink-0 w-5 h-5 transition duration-75">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
            </svg>

          </template>
        </LeftNavItem>
        <LeftNavItem label="Invoices">
          <template #icon>
            <svg
                class="icon flex-shrink-0 w-5 h-5 transition duration-75"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
              <path
                  :class="{ 'hovered': isHovered }"
                  d="M14,0H2A.945.945,0,0,0,1,1V16l3-2,2,2,2-2,2,2,2-2,3,2V1A.945.945,0,0,0,14,0ZM12,10H4V8h8Zm0-4H4V4h8Z"
                  fill="currentColor"
              />
            </svg>
          </template>
        </LeftNavItem>
        <LeftNavItem label="Customers">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="icon flex-shrink-0 w-5 h-5 transition duration-75">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
            </svg>

          </template>
        </LeftNavItem>
        <LeftNavItem label="Chat Room">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="icon flex-shrink-0 w-5 h-5 transition duration-75">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
            </svg>
          </template>
        </LeftNavItem>
        <router-link to="/calendar">
          <LeftNavItem label="Calendar">
            <template #icon>
              <svg
                  class="icon flex-shrink-0 w-5 h-5 transition duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
              >
                <path
                    :class="{ 'hovered': isHovered }"
                    d="M2,5v9H14V5ZM13,2h2a.945.945,0,0,1,1,1V15a.945.945,0,0,1-1,1H1a.945.945,0,0,1-1-1V3A.945.945,0,0,1,1,2H3V1A.945.945,0,0,1,4,0,.945.945,0,0,1,5,1V2h6V1a1,1,0,0,1,2,0ZM12,12H10V10h2ZM9,12H7V10H9Zm3-3H10V7h2ZM9,9H7V7H9ZM6,12H4V10H6Z"
                    fill="currentColor"
                />
              </svg>
            </template>
          </LeftNavItem>
        </router-link>
        <LeftNavItem label="Help Center">
          <template #icon>
            <svg
                class="icon flex-shrink-0 w-5 h-5 transition duration-75"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
              <path
                  :class="{ 'hovered': isHovered }"
                  d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,10ZM8,2a5.834,5.834,0,0,1,2.6.6L9.044,4.156a3.591,3.591,0,0,0-2.089,0L5.4,2.6A5.834,5.834,0,0,1,8,2ZM2,8a5.834,5.834,0,0,1,.6-2.6L4.156,6.956a3.591,3.591,0,0,0,0,2.089L2.6,10.6A5.834,5.834,0,0,1,2,8Zm6,6a5.834,5.834,0,0,1-2.6-.6l1.556-1.556a3.591,3.591,0,0,0,2.089,0L10.6,13.4A5.834,5.834,0,0,1,8,14Zm5.4-3.4L11.844,9.044a3.591,3.591,0,0,0,0-2.089L13.4,5.4a5.933,5.933,0,0,1,0,5.2Z"
                  fill="currentColor"
              />
            </svg>
          </template>
        </LeftNavItem>
        <LeftNavItem label="Settings">
          <template #icon>
            <svg
                class="icon flex-shrink-0 w-5 h-5 transition duration-75"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
              <path
                  :class="{ 'hovered': isHovered }"
                  d="M13.3,5.2l1.1-2.1L13,1.7,10.9,2.8a3.582,3.582,0,0,0-1.1-.4L9,0H7L6.2,2.3a4.179,4.179,0,0,0-1,.4L3.1,1.6,1.6,3.1,2.7,5.2a4.179,4.179,0,0,0-.4,1L0,7V9l2.3.8c.1.4.3.7.4,1.1L1.6,13,3,14.4l2.1-1.1a3.582,3.582,0,0,0,1.1.4L7,16H9l.8-2.3c.4-.1.7-.3,1.1-.4L13,14.4,14.4,13l-1.1-2.1a3.582,3.582,0,0,0,.4-1.1L16,9V7l-2.3-.8A4.179,4.179,0,0,0,13.3,5.2ZM8,11A2.946,2.946,0,0,1,5,8,2.946,2.946,0,0,1,8,5a2.946,2.946,0,0,1,3,3A2.946,2.946,0,0,1,8,11Z"
                  fill="currentColor"
              />
            </svg>
          </template>
        </LeftNavItem>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.icon {
  color: #a5a4bf;
  transition: color 0.3s ease;
}

.group:hover .icon {
  color: #a3a0fb;
}
</style>
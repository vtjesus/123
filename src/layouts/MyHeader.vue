<script setup>
</script>

<template>
  <header>
    <nav class="bg-white py-3.5 px-4">
      <div class="flex flex-wrap items-center">
        <a href="#">
          <div class="lg:ml-64 flex items-center">
            <img src="/public/images/header/icon_search.svg" alt="first_logo">
            <p class="text-navHeader ml-4 text-sm">Search transactions, invoices or help</p>
          </div>
        </a>
        <div class="flex items-center ml-auto">
          <a href="#">
            <div class="mr-6">
              <img src="/public/images/header/last_ring.svg" alt="logo">
            </div>
          </a>
          <a href="#">
            <div class="mr-6 relative">
              <div><img src="/public/images/header/icon_message_first.svg" alt="icon"></div>
              <div class="absolute bottom-0 translate-x-1/2 translate-y-1">
                <img src="/public/images/header/icon_message_second.svg" alt="icon">
              </div>
            </div>
          </a>
          <a href="#">
            <div class="mr-6">
              <div class="relative">
                <div><img src="/public/images/header/bell/bell_first.svg" alt="bell"></div>
                <div class="ml-1.5 mt-0.5"><img src="/public/images/header/bell/bell_second.svg" alt="bell"></div>
                <div class="absolute bottom-3 left-2"><img src="/public/images/header/bell/bell_third.svg" alt="bell"></div>
              </div>
            </div>
          </a>
          <div class="mr-6">
            <img src="/public/images/header/line.svg" alt="line">
          </div>
          <a href="#">
            <div class="flex items-center mr-4">
              <span class="text-navHeader text-sm mr-4">John Doe</span>
              <img src="/public/images/header/arrow_header.svg" alt="arrow">
            </div>
          </a>
          <a href="#" class="">
            <img src="/images/header/avatar.png" alt="profile" class="w-10 h-10 cursor-pointer"/>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
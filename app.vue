<template>
  <div :class="{'dark': darkMode}">
    <!-- <NuxtWelcome /> -->
    <div class="min-h-full">

      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
        <!-- Left 侧边栏 -->
        <div class="hidden bg-red-500 md:block xs:col-span-1 xl:col-span-2">
          <div class="sticky top-0">
            <SidebarLeft/>
          </div>
        </div>

        <!-- Main context -->

        <!-- Right 侧边栏 -->

      </div>

    </div>
  </div>
</template>

<script setup>
const darkMode = ref(true)

</script>

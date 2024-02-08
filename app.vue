<template>
  <!-- 外层容器，支持暗黑模式切换 -->
  <div :class="{'dark': darkMode}">

    <!-- 内层容器，确保内容至少填满整个视口的高度 -->
    <div class="min-h-full">

      <!-- 网格布局容器，定义为12列；自动边距居中；小屏幕以上的边距；大屏幕以上的最大宽度和边距设置；大屏幕以上的网格间距 -->
      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- 左侧边栏，隐藏在中屏幕以下，背景色为红色，小屏幕占用1列，超大屏幕占用2列 -->
        <div class="hidden bg-red-500 md:block xs:col-span-1 xl:col-span-2">

          <!-- 使侧边栏在滚动时保持在顶部 -->
          <div class="sticky top-0">
            <SidebarLeft/>
          </div>
        </div>

        <!-- 主内容区域 -->

        <!-- 右侧边栏 -->

      </div>

    </div>
  </div>
</template>

<script setup>
const darkMode = ref(true)

</script>

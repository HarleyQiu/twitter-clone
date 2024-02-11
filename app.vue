<template>
  <!-- 外层容器，支持暗黑模式切换。当darkMode为true时，应用暗黑模式的样式 -->
  <div :class="{'dark': darkMode}">

    <!-- 内层容器，设置浅色和暗色模式下的背景颜色 -->
    <div class="bg-white dark:bg-dim-900">

      <!-- 用于确保内容至少填满整个视口的高度 -->
      <div class="min-h-full">

        <!-- 网格布局容器，定义为12列的网格；在不同屏幕尺寸下调整边距和最大宽度；lg:gap-5 设置大屏幕以上设备的网格间距 -->
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

          <!-- 左侧边栏，中屏幕尺寸以下时隐藏，在不同屏幕尺寸下调整占用的列数 -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">

            <!-- 侧边栏内容在页面滚动时保持在顶部 -->
            <div class="sticky top-0">
              <!-- 侧边栏组件插槽，用于插入侧边栏内容 -->
              <SidebarLeft/>
            </div>
          </div>

          <!-- 主内容区域 -->
          <main class="col-span-12 marker:md:col-span-8 xl:col-span-6">
            <!-- 路由视图，用于显示匹配的组件 -->
            <router-view/>
          </main>

          <!-- 右侧边栏，在中屏幕尺寸以上显示，在不同屏幕尺寸下调整占用的列数 -->
          <div class="hidden md:block col-span-12 xl:col-span-4 md:col-span-3">

            <!-- 侧边栏内容在页面滚动时保持在顶部 -->
            <div class="sticky top-0">
              <!-- 侧边栏组件插槽，用于插入侧边栏内容 -->
              <SidebarRight/>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// 使用Vue 3的Composition API，定义一个响应式变量控制暗黑模式的开关
const darkMode = ref(false)

</script>

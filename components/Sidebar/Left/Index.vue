<script setup lang="ts">
import {
  HomeIcon,
} from '@heroicons/vue/solid';  // 导入实心的Home图标

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon
} from '@heroicons/vue/outline';  // 导入线条风格的图标

const {defaultTransition} = useTailwindConfig();  // 从Tailwind配置中导入默认过渡效果
</script>

<template>
  <!-- 主容器: 使用Flex布局，垂直排列，高度填满视口 -->
  <div class="flex flex-col h-screen">

    <!-- Logo容器: 内边距, 垂直外边距, 圆形, 悬停背景色, 最小宽度, 暗模式下的悬停背景色, 应用默认过渡效果 -->
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
         :class="defaultTransition">
      <nuxt-link to="/">
        <!-- Logo尺寸: 高度和宽度设置为2rem -->
        <div class="h-8 w-8">  <!-- Logo图标 -->
          <LogoTwitter/>
        </div>
      </nuxt-link>
    </div>

    <!-- 导航栏容器: 上边距, 子元素垂直间距 -->
    <div class="mt-2 space-y-3">

      <!-- 活动状态的导航选项 -->
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon/>
        </template>
        <template v-slot:name>
          Home
        </template>
      </SidebarLeftTab>

      <!-- 以下为非活动状态的导航选项，结构与上述相同 -->
      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon/>
        </template>
        <template v-slot:name>
          Explore
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon/>
        </template>
        <template v-slot:name>
          Notifications
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon/>
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon/>
        </template>
        <template v-slot:name>
          BookMarks
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon/>
        </template>
        <template v-slot:name>
          Lists
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon/>
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DotsCircleHorizontalIcon/>
        </template>
        <template v-slot:name>
          More
        </template>
      </SidebarLeftTab>
    </div>

  </div>
</template>

<style scoped>
</style>

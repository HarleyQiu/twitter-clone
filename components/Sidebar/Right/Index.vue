<script setup lang="ts">
// 定义一个响应式数组ref，用于存储"正在发生的事情"的条目
const whatsHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets'
  },
  {
    title: '#Bitcoin',
    count: '2.8k Tweets'
  },
  {
    title: '#Ethereum',
    count: '1,8k Tweets'
  }
])

// 定义另一个响应式数组ref，用于存储推荐关注的用户信息
const whoToFollowItems = ref([
  {
    name: 'Elon Musk',
    handle: '@elonmusk',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Vitalik Buterin',
    handle: '@VitalikButerin',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Jack Dorsey',
    handle: '@jack',
    image: 'https://picsum.photos/200/200'
  }
])
</script>

<template>
  <!-- 外层容器：设置为垂直布局的弹性容器 -->
  <div class="flex flex-col">

    <!-- "正在发生"预览卡片，传入标题 -->
    <SidebarRightPreviewCard title="What's happening">

      <!-- 使用v-for遍历whatsHappeningItems，为每个条目生成一个预览卡项 -->
      <SidebarRightPreviewCardItem v-for="whatHappening in whatsHappeningItems">
        <div>
          <!-- 条目标题：加粗，灰色文字，中等文字大小 -->
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatHappening.title }}</h2>
          <!-- 条目计数：小号文字，浅灰色文字 -->
          <p class="text-xs text-gray-400">{{ whatHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>


    <!-- "推荐关注"预览卡片，传入标题 -->
    <SidebarRightPreviewCard title="Who to follow">
      <!-- 遍历推荐关注列表，展示用户信息和关注按钮 -->
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row items-center justify-between p-2">
          <!-- 用户头像和信息 -->
          <div class="flex flex-row">
            <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>

          <!-- 关注按钮 -->
          <div class="flex h-full">
            <button class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<style scoped>

</style>

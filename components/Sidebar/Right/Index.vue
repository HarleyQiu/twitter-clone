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
          <h2 class="font-bold text-gray-800 text-md">{{ whatHappening.title }}</h2>
          <!-- 条目计数：小号文字，浅灰色文字 -->
          <p class="text-xs text-gray-400">{{ whatHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>

    </SidebarRightPreviewCard>


    <!-- "推荐关注"预览卡片，只传入标题，内部内容可能在其他地方定义或通过插槽添加 -->
    <SidebarRightPreviewCard title="Who to follow"/>
  </div>
</template>

<style scoped>

</style>

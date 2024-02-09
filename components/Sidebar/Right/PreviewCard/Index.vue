<script setup lang="ts">
// 使用Tailwind配置中的变量，例如twitterBorderColor和defaultTransition
const {twitterBorderColor, defaultTransition} = useTailwindConfig()
const props = defineProps({
  title: {
    type: String,
    required: true  // 标题是必需的属性
  }
})
</script>

<template>
  <!-- 外层div：设置边距，隐藏溢出内容，圆角边框，背景颜色，支持暗模式下的背景色 -->
  <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700"
       :class="twitterBorderColor">
    <!-- 标题h1：内边距，大号文字，加粗字体，文本颜色，底部边框，暗模式下的文本颜色，支持动态添加Twitter边框颜色 -->
    <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white"
        :class="twitterBorderColor">
      <!-- 显示传入的标题 -->
      {{ props.title }}
    </h1>

    <!-- 默认插槽内容位置 -->
    <slot></slot>

    <!-- "show more"按钮div：内边距，小号文字，蓝色文本，指针光标，hover状态下的背景颜色变化，暗模式下的hover背景色变化，应用过渡效果 -->
    <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
         :class="defaultTransition">
      show more
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
// 从Tailwind配置中导入twitterBorderColor和defaultTransition变量
const {twitterBorderColor, defaultTransition} = useTailwindConfig()

// 使用计算属性拼接defaultTransition和twitterBorderColor类，
// 以便动态应用这些样式类到组件的根元素上
const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
</script>

<template>
  <!-- 根div元素，应用内边距、底部边框、指针光标，
       hover时的背景色变化，暗模式下的hover背景色变化，
       以及通过计算属性动态应用的样式类 -->
  <div class="p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
       :class="wrapperClasses">
    <!-- 默认插槽，允许将内容动态插入此处 -->
    <slot></slot>
  </div>
</template>

<style scoped>

</style>

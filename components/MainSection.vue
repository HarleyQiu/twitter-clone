<script setup lang="ts">
const {twitterBorderColor} = useTailwindConfig()
// 使用`defineProps`定义组件的props
const props = defineProps({
  title: {
    type: String,  // `title`属性类型为字符串
    required: true  // `title`是必需的
  },
  loading: {
    type: Boolean,  // `loading`属性类型为布尔值
    required: true,  // `loading`是必需的
    default: false  // `loading`的默认值为false
  }
})


</script>

<template>
  <!-- 根元素div，应用x轴边框样式，以及动态的twitterBorderColor类 -->
  <div class="border-x" :class="twitterBorderColor">
    <!-- 标题容器，具有粘性定位和背景模糊效果，支持暗模式下的背景 -->
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md  dark:bg-dim-900/80">
      <!-- 显示传入的标题，并根据模式调整文字颜色 -->
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ props.title }}</h2>
    </div>
    <!-- 条件渲染加载指示器，只有当`props.loading`为true时显示 -->
    <div v-if="props.loading" class="flex items-center justify-center p-4 border-b" :class="twitterBorderColor">
      <!-- 使用自定义的加载指示器组件 -->
      <UISpinner/>
    </div>
    <!-- 当不在加载状态时，显示默认插槽的内容 -->
    <div v-else>
      <slot></slot>
    </div>

  </div>
</template>

<style scoped>

</style>

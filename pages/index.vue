<script setup lang="ts">

// 定义一个响应式变量`loading`，用于控制是否显示加载状态
// 初始状态为false，表示不显示加载状态
const loading = ref(false)
</script>

<template>
  <div>
    <!-- MainSection组件，用于展示主要内容区域 -->
    <!-- `title`属性设置为"Home"，`loading`属性绑定到响应式变量`loading` -->
    <!-- 组件内显示文本"this is our main section" -->
    <MainSection title="Home" :loading="loading">
      this is our main section
    </MainSection>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
const {defaultTransition} = useTailwindConfig();  // 从Tailwind配置中导入默认过渡效果
const props = defineProps({
  active: {
    type: Boolean,  // 定义接受的属性`active`，类型为Boolean
    default: false  // 默认值为false
  }
});

const textClasses = computed(() =>
    props.active ? 'font-semibold' : 'font-normal'  // 根据`active`属性的值动态计算文本的类，决定是加粗还是正常
);
</script>

<template>
  <!-- Nuxt链接，使用Flex布局，垂直居中，内边距，圆形，最小宽度，悬停背景色，暗模式下的文本颜色和悬停背景色，应用默认过渡效果 -->
  <nuxt-link to="#"
             class="flex items-center p-3 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
             :class=" defaultTransition">
    <div class="w-6 h-6 text-dark">
      <slot name="icon"></slot>  <!-- 图标插槽，显示传入的图标 -->
    </div>

    <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>  <!-- 名称插槽，显示传入的名称，仅在xl尺寸显示，根据`active`状态动态调整文本粗细 -->
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>

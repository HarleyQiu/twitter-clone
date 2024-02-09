export default () => {
    return {
        // `defaultTransition`属性定义了一个过渡效果的类
        // `transition-all` 应用于所有变化的属性，使过渡效果更加平滑
        // `duration-350` 设置过渡效果的持续时间为350毫秒
        // `ease-in-out` 是过渡的速度曲线，此处表示开始和结束时速度较慢，中间速度较快
        defaultTransition: 'transition-all duration-350 ease-in-out',

        // `twitterBorderColor`属性定义了边框颜色的类
        // `border-white-200` 在浅色模式下设置边框颜色为浅白色，但实际上这个类名似乎有误，
        // 因为Tailwind CSS中颜色类的格式通常是`border-{color}-{number}`，如`border-gray-200`
        // `dark:border-gray-700` 在暗黑模式下设置边框颜色为深灰色，这样可以根据用户的偏好自动调整边框颜色
        twitterBorderColor: 'border-white-200 dark:border-gray-700',
    }
}

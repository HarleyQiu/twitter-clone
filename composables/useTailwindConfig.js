export default () => {
    return {
        // `defaultTransition`属性定义了一个过渡效果的类
        // `transition-all` 应用于所有变化的属性，使过渡效果更加平滑
        // `duration-350` 设置过渡效果的持续时间为350毫秒
        // `ease-in-out` 是过渡的速度曲线，此处表示开始和结束时速度较慢，中间速度较快
        defaultTransition: 'transition-all duration-350 ease-in-out',
    }
}

<template>
  <div>I am in hooks</div>
  <div>{{ x }}-----{{ y }}</div>
</template>

<script>
//mixin -> HOC（模板套模板） & render-props（slot） -> Hook
//处理的痛点：
//如果功能使用了两个数据属性，一个计算属性和一个方法，其中该方法在距数据属性「一百行以上」的位置定义。
//维护同一个逻辑需要跨越上百行的「空间距离」
//而且这些逻辑均属于一个组件的时候,改一个功能需要上下横跳
//基于「逻辑功能」去组织代码，而不是 state 放在一块，method 放在一块，
import { useMousePosition } from '@/hooks/hooks'
export default {
  setup() {
    const { x, y } = useMousePosition()
    // other logic...
    return { x, y }
  },
}
</script>

<style scoped></style>

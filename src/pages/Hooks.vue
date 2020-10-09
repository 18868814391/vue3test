<template>
  <div v-highlight="'yellow'">I am in hooks</div>
  <div>{{ x }}-----{{ y }}</div>
</template>

<script>
import { useMousePosition } from '@/hooks/hooks'
export default {
  setup(props, context) {
    const { x, y } = useMousePosition()
    return { x, y }
  },
}
</script>

<style scoped></style>

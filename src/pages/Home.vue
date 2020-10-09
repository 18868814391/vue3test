<template>
  <div>
    <div>I am in Home page</div>
    <div class="flexBox">
      <span>ref:{{ count }}</span>
      <span>reactive:{{ reactiveField }}</span>
      <span>{{ objA }}</span>
    </div>
    <div class="flexBox">
      <button @click="addRef">addRef</button>
      <button @click="addReactive">addReactive</button>
      <button @click="addobjA">addobjA</button>
    </div>
  </div>
</template>

<script>
//ref 由传入值返回一个响应式的、可变的且只有value一个属性的ref对象 （简单数据）
//  string 和 number 是只有值，没有引用的  故vue无论defineProperty proxy均无法实时监听  所以必须包装对象ref(3) data(2)
// reactive   reactive的作用是将对象包装成响应式对象——通过 Proxy代理后的对象。set forceUpdate滚出
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const state = reactive({
      reactiveField: 0,
      objA: ['a', 'b', 'c'],
    })
    const addRef = () => {
      count.value++
    }
    const addReactive = () => {
      state.reactiveField++
    }
    const addobjA = () => {
      state.objA[0] = 'x'
    }
    return {
      count,
      ...toRefs(state),
      addRef,
      addReactive,
      addobjA,
    }
  },
}
</script>

<style scoped>
.flexBox {
  width: 600px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

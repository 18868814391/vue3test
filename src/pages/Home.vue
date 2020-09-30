<template>
  <div>
    <div>I am in Home page</div>
    <div class="flexBox">
      <text>ref:{{ count }}</text>
      <text>reactive:{{ reactiveField }}</text>
      <text>reactiveA:{{ a[0].a.a }}</text>
      <text>dataA:{{ dataA }}</text>
      <text>objA:{{ objA[0] }}</text>
    </div>
    <div class="flexBox">
      <button @click="addRef">addRef</button>
      <button @click="addReactive">addReactive</button>
      <button @click="addA">addA</button>
      <button @click="addDataA">addDataA</button>
      <button @click="addobjA">addobjA</button>
    </div>
  </div>
</template>

<script>
//ref 由传入值返回一个响应式的、可变的且只有value一个属性的ref对象 （简单数据）
//  string 和 number 是只有值，没有引用的  故vue无论defineProperty proxy均无法实时监听  所以必须包装对象ref(3) data(2)
// reactive   reactive的作用是将对象包装成响应式对象——通过 Proxy代理后的对象。set forceUpdate滚出
import { ref, reactive, toRefs, provide, inject } from 'vue'

export default {
  setup() {
    //生命周期  在beforeCreate之后  created之前  没有this  只能调用一次
    const count = ref(0)
    const state = reactive({
      reactiveField: 0,
      a: [
        {
          a: {
            a: 1,
          },
        },
      ],
    })
    const addRef = () => {
      count.value++
    }
    const addReactive = () => {
      state.reactiveField++
    }
    const addA = () => {
      state.a[0].a.a++
    }
    return {
      count,
      ...toRefs(state),
      addA,
      addRef,
      addReactive,
    }
  },
  data() {
    return {
      dataA: 0,
      objA: ['a', 'b', 'c'],
    }
  },
  created() {},
  methods: {
    // addRef() {
    //   this.count++
    // },
    // addA() {
    //   this.a[0].a.a++
    // },
    addDataA() {
      this.dataA++
    },
    addobjA() {
      this.objA[0] = 'x'
    },
  },
}
</script>

<style scoped>
.flexBox {
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

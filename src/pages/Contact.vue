<template>
  <div>
    <div>{{ appdata }}</div>
    <button @click="changeFather()">changeAPPData</button>
    <br />
    <div>i am data1 in father: {{ data1 }}</div>
    <div>i am data2 in father: {{ data2 }}</div>
    <Comp1 ref="RefChilde" :data1_c="data1" :data2_c="data2" @FatherTalk="FatherTalk"></Comp1>
    <div @click="trigerChild">let child talk</div>
  </div>
</template>

<script>
import { provide, inject, ref,reactive, getCurrentInstance, computed,toRefs } from 'vue'
import Comp1 from '@/components/comp1.vue'
export default {
  setup(props, context) {
    const { ctx } = getCurrentInstance()
    const appdata = inject('appdata')
    // const count = computed(() => ctx.$store.state.count)
    // const addMount = () => {
    //   ctx.$store.dispatch('add')
    // }
    const changeFather = () => {
      appdata.value = 'children change it'
    }
    const FatherTalk=()=>{
      alert('i am father')
    }
    const RefChilde = ref(null)
    const trigerChild=()=>{
      RefChilde.value.alr()
    }
    // const data1 = ref('123')
    const state = reactive({
      data1: {'a':11},
    })    
    const data2 = ref('456')
    provide('data1_c', state)
    provide('data2_c', data2)
    return {
      appdata,
      ...toRefs(state),
      // data1,
      data2,
      changeFather,
      FatherTalk,
      trigerChild,
      RefChilde
      // count,
      // addMount,
    }
  },
  components: {
    Comp1,
  },
}
</script>

<style scoped></style>

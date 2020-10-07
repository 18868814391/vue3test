<template>
  <div>
    <div>{{ appdata }}</div>
    <button @click="changeFather()">changeAPPData</button>

    <div>i am data1 in father: {{data1}}</div>
    <div>i am data2 in father: {{data2}}</div>
    <Comp1 v-model:data1_c="data1" v-model:data2_c="data2"></Comp1>
  </div>
</template>

<script>
import { provide, inject, ref } from 'vue'
import Comp1 from '@/components/comp1.vue'
export default {
  setup() {
    const appdata = inject('appdata')
    const data1 = ref('123')
    const data2 = ref('456')
    const changeFather = () => {appdata.value= 'children change it'}
    return {
      appdata,
      data1,
      data2,
      changeFather
    }
  },
  components: {
    Comp1,
  },
}
</script>

<style scoped></style>

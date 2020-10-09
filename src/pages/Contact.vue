<template>
  <div>
    <div>{{ appdata }}</div>
    <button @click="changeFather()">changeAPPData</button>
    <div @click="addMount">i am data frome store {{ count }}</div>
    <br />
    <div>i am data1 in father: {{ data1 }}</div>
    <div>i am data2 in father: {{ data2 }}</div>
    <Comp1 v-model:data1_c="data1" v-model:data2_c="data2"></Comp1>
  </div>
</template>

<script>
import { provide, inject, ref, getCurrentInstance, computed } from 'vue'
import Comp1 from '@/components/comp1.vue'
export default {
  setup() {
    const { ctx } = getCurrentInstance()
    const appdata = inject('appdata')
    const count = computed(() => ctx.$store.state.count)
    const addMount = () => {
      ctx.$store.dispatch('add')
    }
    const data1 = ref('123')
    const data2 = ref('456')
    const changeFather = () => {
      appdata.value = 'children change it'
    }
    return {
      appdata,
      data1,
      data2,
      changeFather,
      count,
      addMount,
    }
  },
  components: {
    Comp1,
  },
}
</script>

<style scoped></style>

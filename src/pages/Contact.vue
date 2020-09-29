<template>
  <div>I am in Contact</div>
  <div>{{ appdata }}</div>
  <button @click="changeFather()">changeFatherData</button>
  <Comp1 v-model:data1_c="data1" v-model:data2_c="data2"></Comp1>
</template>

<script>
import { provide, inject, ref } from 'vue'
//申明式引入，为了tree-shaking， Vue 应用程序中未使用的全局 api 将从最终捆绑包中消除
//nextTick  observable  version compile set  delete
import { nextTick } from 'vue'
import Comp1 from '@/components/comp1.vue'
export default {
  setup() {
    const appdata = inject('appdata')
    const data1 = ref('123')
    const data2 = ref('456')
    return {
      appdata,
      data1,
      data2,
    }
  },
  components: {
    Comp1,
  },
  async created() {
    await nextTick(console.log(123))
  },
  methods: {
    changeFather() {
      this.appdata = 'children change it'
    },
  },
}
</script>

<style scoped></style>

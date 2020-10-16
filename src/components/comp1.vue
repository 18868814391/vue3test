<template>
  <div class="ccinps">
    <div @click="eem()">I am child components</div>
    <input class="ccinp" type="text" placeholder="i am in comp1" v-model="data1_c"/>
    <input class="ccinp" type="text" placeholder="i am in comp1" v-model="data2_c"/>
  </div>
</template>

<script>
import { ref, reactive, toRefs,inject } from 'vue'
export default {
  setup(props, context) {   
    const data1_c = inject('data1_c')
    const data2_c = inject('data2_c')
    return {
      data1_c,
      data2_c
    }
  },
}
</script>

<style scoped>
.ccinps {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
.ccinp {
  width: 600px;
  height: 100px;
  margin: 10px 0;
  font-size: 30px;
}
</style>

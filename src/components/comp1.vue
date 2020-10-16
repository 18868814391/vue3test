<template>
  <div class="ccinps">
    <div>I am child components</div>
    <div>{{data1_c.data1}}<button @click="changeIt()"> let change obj !</button></div>
    <br/>
    <input class="ccinp" type="text" placeholder="i am in comp1" v-model="data2_c"/>
    <div @click="ftk">let father talk</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs,inject } from 'vue'
export default {
  setup(props, context) {   
    const data1_c = inject('data1_c')
    const data2_c = inject('data2_c')
    const changeIt=()=>{
      data1_c.data1.a=='ss'?data1_c.data1.a='xx':data1_c.data1.a='ss'
    }
    const ftk=()=>{
      console.log('contxt-c',context)
      context.emit('FatherTalk')
    }
    const alr=()=>{
      alert('i am child')
    }
    return {
      data1_c,
      data2_c,
      alr,
      ftk,
      changeIt
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

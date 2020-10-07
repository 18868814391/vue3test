<template>
  <div class="ccinps">
    <div>I am child components</div>
    <input class="ccinp" type="text" placeholder="i am in comp1" v-model="data1_c" />
    <input class="ccinp" type="text" placeholder="i am in comp1" v-model="data2_c" />  
  </div>
</template>

<script>
export default {
  props: {
    data1_c: {
      type: String,
      default: '',
    },
    data2_c: {
      type: String,
      default: '',
    },
  },
  setup() {
    
  },
}
</script>

<style scoped>
.ccinps{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:50px ;
}
.ccinp{
  width: 600px;
  height: 100px;
  margin: 10px 0;
  font-size: 30px;
}
</style>

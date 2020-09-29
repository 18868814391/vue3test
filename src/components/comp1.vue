<template>
  <div>I am components 1</div>
  <input type="text" placeholder="i am in comp1" v-model="data1_c" />
  <input type="text" placeholder="i am in comp1" v-model="data2_c" />
</template>

<script>
export default {
  setup() {},
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
}
</script>

<style scoped></style>

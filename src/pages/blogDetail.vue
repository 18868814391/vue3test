<template>
  <div class="blogdetail">
    <div class="tit">{{ detail.title }}</div>
    <div class="ind">由用户{{ detail.adm }}在{{ detail.updatatime }}上传</div>
    <div class="txt" v-html="detail.content"></div>
  </div>
</template>

<script>
import { forBlog } from '@/api/index.js'
import { ref, reactive, toRefs, getCurrentInstance } from 'vue'
export default {
  setup(props, context) {
    const state = reactive({
      id: '',
      detail: {},
    })
    const { ctx } = getCurrentInstance()
    console.log('112', ctx.$router.currentRoute._value.query.id)
    state.id = ctx.$router.currentRoute._value.query.id
    forBlog({
      id: state.id,
    }).then((d) => {
      console.log('blog', d.data.data)
      state.detail = d.data.data
    })
    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="less">
.blogdetail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tit{
    width: 100%;
    text-align: center;
    font-size: 40px;
  }
  .ind{
    width: 100%;
    font-size: 10px;
    color: #666;
    margin: 10px 0;
  }
  .txt{
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 28px;
    img{
      width: 100%;
    }
  }
}
</style>

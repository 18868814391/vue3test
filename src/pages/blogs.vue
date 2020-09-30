<template>
  <div class="myBlog">
    <div class="myBlog-tab">
      <div
        class="myBlog-tabs"
        v-for="(value, key) in tabsList"
        :key="key"
        @click="tabSearch(key)"
      >
        {{ key }}({{ value }})
      </div>
      <div class="myBlogs" v-for="(item, index) in dataList" :key="index">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { getTabs } from '@/hooks/hook_tab'
import { getBlogs } from '@/hooks/hook_list'
export default {
  setup() {
    const { tabsList } = getTabs()
    const { dataList } = getBlogs()
    const tabSearch = (d) => {
      console.log(d)
    }
    return {
      tabsList,
      dataList,
      tabSearch,
    }
  },
}
</script>

<style lang="less" scoped>
.myBlog {
  width: 375px;
  min-height: 100px;
  background: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  .myBlog-tab {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .myBlog-tabs {
      font-size: 12px;
      margin: 10px;
      border: 1px solid #000;
      padding: 5px;
      cursor: pointer;
    }
  }
  .myBlogs {
    width: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 10px;
    padding: 3px;
    box-sizing: border-box;
  }
}
</style>

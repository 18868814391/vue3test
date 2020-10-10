<template>
  <div class="myBlog">
    <div class="myBlog-tab">
      <div
        class="myBlog-tabs1"
        v-for="(value, key) in tabsList"
        :key="key"
        @click="clickTab(key)"
      >
        {{ key }}({{ value }})
      </div>
      <router-link
        :to="{ path: '/blogDetail', query: { id: item.id } }"
        class="myBlogs"
        v-for="(item, index) in dataList"
        :key="index"
      >
        {{ item.title }}
      </router-link>
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
    const { dataList, clickTab } = getBlogs()
    return {
      tabsList,
      dataList,
      clickTab,
    }
  },
}
</script>

<style lang="less" scoped>
.myBlog {
  width: 750px;
  background: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .myBlog-tab {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .myBlog-tabs1 {
      font-size: 16px !important;
      display: inline-block;
      margin: 20px;
      border: 2px solid #000;
      padding: 10px;
      cursor: pointer;
    }
  }
  .myBlogs {
    width: 100%;
    border: 2px solid #000;
    border-radius: 10px;
    margin: 20px;
    padding: 6px;
    box-sizing: border-box;
  }
}
</style>

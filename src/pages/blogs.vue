<template>
  <div class="myBlog"></div>
</template>

<script>
import { BlogList, blogDetail, yiiBlogTab } from '@/api/index.js'
export default {
  setup() {},
  created() {
    BlogList()
    yiiBlogTab({
      tab: [
        'js',
        'vue',
        'php',
        'yii',
        'nginx',
        'mysql',
        'nuxt',
        'linux',
        'node',
        'flutter',
        'RN',
      ],
    })
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
}
</style>

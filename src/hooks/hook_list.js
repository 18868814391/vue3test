import { BlogList, yiiBlogSearch } from '@/api/index.js'
import { ref, reactive, toRefs, onMounted, onUnmounted } from 'vue'

export function getBlogs() {
  const state = reactive({
    pages: 10,
    start_page: 0,
    dataList: [],
  })
  const getBlogList = () => {
    BlogList({ pages: state.pages, start_page: state.start_page }).then((d) => {
      state.dataList = d.data.data
    })
  }
  const clickTab = (e) => {
    state.start_page = 0
    state.dataList = []
    yiiBlogSearch({ keyword: e }).then((d) => {
      state.dataList = d.data.data
    })
  }
  const goBottom = (e) => {
    // 滚动视口高度(也就是当前元素的真实高度)
    let scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight
    // 可见区域高度
    let clientHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    // 滚动条顶部到浏览器顶部高度
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    if (clientHeight + scrollTop == scrollHeight) {
      console.log('触底了啦！！！！！！')
    }
  }

  getBlogList()

  onMounted(() => {
    window.addEventListener('scroll', goBottom)
  })

  onMounted(() => {
    console.log('i am mounted too')
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', goBottom)
  })

  return { ...toRefs(state), clickTab }
}

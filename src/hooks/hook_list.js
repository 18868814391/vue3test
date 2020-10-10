import { BlogList, yiiBlogSearch } from '@/api/index.js'
import { ref, reactive, toRefs, onMounted, onUnmounted } from 'vue'

export function getBlogs() {
  const state = reactive({
    loading: false,
    finish: false,
    pages: 10,
    start_page: 0,
    dataList: [],
  })
  const getBlogList = () => {
    state.loading = true
    BlogList({ pages: state.pages, start_page: state.start_page })
      .then((d) => {
        state.dataList = state.dataList.concat(d.data.data)
        if (!d.data.data[0]) {
          state.finish = true
        }
      })
      .finally(() => {
        state.loading = false
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
    if (state.loading || state.finish) {
      return false
    }
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
      state.start_page++
      getBlogList()
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

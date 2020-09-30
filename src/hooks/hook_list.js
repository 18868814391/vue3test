import { BlogList } from '@/api/index.js'
import { ref, reactive, toRefs } from 'vue'

export function getBlogs() {
  const state = reactive({
    pages: 10,
    start_page: 0,
    dataList: [],
  })
  BlogList({ pages: state.pages, start_page: state.start_page }).then((d) => {
    state.dataList = d.data.data
  })

  return { ...toRefs(state) }
}

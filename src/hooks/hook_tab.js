import { yiiBlogTab } from '@/api/index.js'
import { ref, reactive, toRefs } from 'vue'

export function getTabs() {
  const state = reactive({
    tabs: [
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
    tabsList: [],
  })

  yiiBlogTab({ tab: state.tabs }).then((d) => {
    state.tabsList = d.data.data
  })
  return { ...toRefs(state) }
}

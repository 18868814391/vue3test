import axios from 'axios'

// 创建axios实例
if (process.env.NODE_ENV == 'development') {
  //测试用
  // axios.defaults.baseURL = 'https://www.shenyifan.top/apis/syf/php'
} else {
  axios.defaults.baseURL = '/apis/syf/php'
}
const service = axios.create({
  timeout: 10000, // 请求超时时间
})

export default service

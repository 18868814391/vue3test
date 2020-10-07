import request from '@/api/axios.js'
export function BlogList(params) {
  return request({ url: '/upload/BlogList.php', method: 'post', data: params })
} // blog列表
export function blogDetail(params) {
  return request({url: '/upload/BlogDetail.php',method: 'post',data: params,})
} // blog详情
export function wxsign(params) {
  return request({ url: '/wechat/access.php', method: 'post', data: params })
} // 微信签名
export function yiiBlogTab(params) {
  return request({url: '/yii/web/index.php?r=blog/tabs',method: 'post',data: params,})
} // yii 获取blog标签数
export function yiiBlogSearch(params) {
  return request({url: '/yii/web/index.php?r=blog/search',method: 'post',data: params,})
} // yii博客搜索

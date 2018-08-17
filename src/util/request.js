import axios from 'axios'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
  //baseURL: '/api', // api的base_url
  // timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

//POST传参序列化
service.interceptors.request.use((config) => {

  if (config.method === 'post' || config.method === 'put') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log(error) // for debug
  Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
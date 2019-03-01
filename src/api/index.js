import request from './fetch.js'
import MOVIE_URL_LIST from './movie_api.js'

//const BASEURL = 'http://api.douban.com/v2'
//const BASEURL = 'https://douban.uieee.com/v2'

const BASEURL = '/api' //和build/dev.conf.js 里devSever中proxy 相关


var RESTapi = {}

for (let item of MOVIE_URL_LIST) {
  RESTapi[item.name] = (param) => request({
    url: `${BASEURL}/${item.url}`,
    method: item.method || "GET",
    param: param,
  })
}

function paramError() {
  throw new Error("REST请求参数缺失")
}

export default RESTapi;
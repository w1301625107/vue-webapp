import fetch from './base'

//const BASEURL = 'http://api.douban.com/v2'
//const BASEURL = 'https://douban.uieee.com/v2'

const BASEURL = 'api' //和build/dev.conf.js 里devSever中proxy 相关

const URL_LIST = [{
  name: 'MOVIE_SUBJECT',
  url: 'movie/subject'
}]

var RESTapi = {}

for (let item of URL_LIST) {
  RESTapi[item.name] = (param = paramError()) => fetch({
    url: `${BASEURL}/${item.url}/${param}`,
    method: item.method ? item.method : "get",
  })
}

function paramError() {
  throw new Error("REST请求参数缺失")
}

export default RESTapi;
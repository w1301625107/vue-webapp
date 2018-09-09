import fetch from './fetch.js'

//const BASEURL = 'http://api.douban.com/v2'
//const BASEURL = 'https://douban.uieee.com/v2'

const BASEURL = 'api' //和build/dev.conf.js 里devSever中proxy 相关

const MOVIE_URL_LIST = [{
    name: 'MOVIE_SUBJECT',
    url: 'movie/subject'
  }, {
    name: 'MOVIE_IN_THEATHER',
    url: 'movie/in_theaters'
  }, {
    name: 'MOVIE_COMING_SOON',
    url: 'movie/coming_soon'
  },
  {
    name: 'MOVIE_US_BOX',
    url: 'movie/us_box'
  }, {
    name: 'MOVIE_NEW_MOVIES',
    url: 'movie/new_movies'
  },
  {
    name: 'MOVIE_SEARCH',
    url: 'movie/search'
  },
  {
    name: 'MOVIE_TOP250',
    url: 'movie/top250'
  },
]

var RESTapi = {}

for (let item of MOVIE_URL_LIST) {
  RESTapi[item.name] = (param) => fetch({
    url: `${BASEURL}/${item.url}`,
    method: item.method ? item.method : "GET",
    param: param,
  })
}

function paramError() {
  throw new Error("REST请求参数缺失")
}

export default RESTapi;
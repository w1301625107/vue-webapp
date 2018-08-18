import request from '../util/request.js'

export default function fetch(option = {}) {
  let url = option.url ? option.url : paramError();
  let method = option.method ? option.method : "get";
  let param = option.param ? option.param : {};

  return new Promise((resolve, reject) => {
    request({
      url: url,
      method: method,
      param
    }).then(response => {
      console.log(response);
      resolve(response.data)
      // let data = response.data;
      // if (data.rs) {
      //   resolve(data.extend.pageInfo)
      // }
    })
  });
}

function paramError() {
  throw new Error("请求参数缺失url")
}
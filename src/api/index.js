import request from '../util/request.js'

export function fetch(option) {
  let url = option.url || paramError();
  let method = option.method || "GET";
  let param = option.method || {}

  return new Promise((resolve, reject) => {
    request
  })
}


function paramError() {
  throw new Error("请求参数缺失url")
}